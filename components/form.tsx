import React, {useRef} from 'react';
import {useForm} from 'react-hook-form';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import {IoMdSend} from 'react-icons/io';
import toast from 'react-hot-toast';

import Button from './button';
import Link from './link';

interface FormData {
	name: string;
	email: string;
	message: string;
}

const Form = () => {
	const {register, handleSubmit, getValues, formState: {isSubmitting}} = useForm<FormData>();
	const captchaRef = useRef(null);

	const onSubmit = async () => {
		// @ts-expect-error Invalid
		captchaRef.current.execute();
	};

	return (
		<section>
			<form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
				<div className="w-full md:w-96">
					<label className="font-sans block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
						Name (or Twitter handle)
					</label>
					<input
						{...register('name', {required: true})}
						type="text"
						placeholder="Jane Appleseed"
						id="name"
						className="shadow appearance-none border border-gray-800 w-full rounded py-2 px-3 text-gray-200 leading-tight focus:border-gray-500 bg-gray-900 h-10"
					/>
				</div>
				<div className="w-full md:w-96">
					<label className="font-sans block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
						Email address
					</label>
					<input
						{...register('email', {required: true})}
						type="email"
						placeholder="jane@acme.com"
						id="email"
						className="shadow appearance-none border border-gray-800 w-full rounded py-2 px-3 text-gray-200 leading-tight focus:border-gray-500 bg-gray-900 h-10"
					/>
				</div>
				<div className="w-full md:w-96">
					<label className="font-sans block text-gray-300 text-sm font-bold mb-2" htmlFor="message">
						Message
					</label>
					<textarea
						{...register('message', {required: true, maxLength: 2000})}
						placeholder="I would like to talk..."
						id="message"
						className="shadow appearance-none border border-gray-800 w-full rounded py-2 px-3 text-gray-200 leading-tight focus:border-gray-500 bg-gray-900 h-40 resize-none"
						maxLength={2000}
					/>
				</div>
				<HCaptcha
					sitekey="bd49bb22-9659-4fe6-bd0d-c0008c68019a"
					onVerify={async token => {
						const response = fetch('/api/message', {
							method: 'POST',
							body: JSON.stringify({
								...getValues(),
								token,
							}),
						});

						toast.promise(response, {
							loading: 'Sending the message...',
							success: () => 'Message sent — thanks!',
							error: () => 'Something went wrong :(',
						},
						{
							position: 'bottom-right',
						}).catch(() => toast.error('Something went wrong :('));
					}}
					ref={captchaRef}
					theme="dark"
					size="invisible"
					reCaptchaCompat={false}
				/>
				<p className="text-gray-400 text-xs -mt-4 w-full md:w-96">Your data will be used solely to answer the message. This form uses <Link href="https://www.hcaptcha.com/" isExternal text="hCaptcha"/> to prevent spam.</p>
				<Button
					type="submit"
					// @ts-expect-error Invalid error
					icon={<IoMdSend size={18} />}
					disabled={isSubmitting}
				>
					Send message
				</Button>
			</form>
		</section>
	);
};

export default Form;
