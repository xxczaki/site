import LRU from 'lru-cache';
import type {NextApiResponse} from 'next';

interface Options {
	uniqueTokenPerInterval?: number;
	interval?: number;
}

const rateLimit = (options: Options) => {
	const tokenCache = new LRU({
		max: options.uniqueTokenPerInterval ?? 500,
		maxAge: options.interval ?? 60_000,
	});

	return {
		check: async (response: NextApiResponse, limit: number, token: string): Promise<void> =>
			new Promise((resolve, reject) => {
				const tokenCount = tokenCache.get(token) || [0];

				if ((tokenCount as number[])[0] === 0) {
					tokenCache.set(token, tokenCount);
				}

				(tokenCount as number[])[0] += 1;

				const currentUsage = (tokenCount as number[])[0];

				const isRateLimited = currentUsage >= limit;
				response.setHeader('X-RateLimit-Limit', limit);
				response.setHeader(
					'X-RateLimit-Remaining',
					isRateLimited ? 0 : limit - currentUsage,
				);

				if (isRateLimited) {
					reject();
				} else {
					resolve();
				}
			}),
	};
};

export default rateLimit;
