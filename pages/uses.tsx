import React from 'react';
import {NextPage} from 'next';

import Main from '../components/main';
import ExtLink from '../components/extlink';

const Index: NextPage<unknown> = () => {
	return (
		<Main>
			<h1>Uses</h1>
			<p>Here you can find information about the all the hardware and software I own and use. I update this page regularly, so be sure to check it out later. Idea inspired by <ExtLink target="_blank" rel="noopener noreferrer" href="https://uses.tech/">/uses</ExtLink>.</p>
			<h2>Desk</h2>
			<p>Since November 2020 I&apos;m using a <b>MacBook Pro 13&quot;</b> with the following specs:</p>
			<ul>
				<li>Intel Core I5 2,0-3,8 GHz (10th gen)</li>
				<li>16GB RAM (DDR4, 3733 MHz)</li>
				<li>512GB SSD PCIe</li>
				<li>4x Thunderbolt 3 (USB-C)</li>
				<li>Touch Bar (<i>yes, I actually like it</i>)</li>
			</ul>
			<p>Before that I was using a custom PC with Linux Mint for about 3 years.</p>
			<h2>Accessories</h2>
			<p>I&apos;m using a USB hub (<b>Green Cell HUB GC Connect60 8in1</b>) in order to connect stuff like my 24&quot; <b>Dell U2410 monitor</b> (rather old now, but it works just fine) or the <b>Logitech MX Master 3</b> mouse to my laptop. My favorite MacBook stand is the <b>Twelve South Curve</b>. <b>Logitech K350</b> is my wireless, ergonomic keyboard.</p>
			<p>I use <b>Bang &amp; Olufsen H9 (3rd gen) headphones</b> for anything sound-related.</p>
			<h2>Other gear</h2>
			<p>I&apos;m using <b>iPhone 8 (64GB)</b> as my phone. YubiKey 5C NFC is my security key. I keep smaller files on <b>SanDisk 64GB Ultra Dual Drive Luxe USB</b> and large backups on my <b>Samsung Portable SSD T7 (500GB)</b>.</p>
			<h2>Software</h2>
			<p>I use <b>Mozilla Firefox Developer Edition</b>, optimized for privacy, to browser the internet. <b>1Password</b> is where I store all my passwords. I listen to classical music on <b>Spotify</b> and write everything from travel plans to useful phrases in <b>Notion</b>. <b>Signal</b> is my preferred online messaging service. I write longer texts in <b>iA Writer</b>.</p>
			<p>I do most of the programming-related stuff in <b>Visual Studio Code</b>, which I carefully configured. I use <b>iTerm 2</b> with the <b>zsh</b> shell for running commands.</p>
			<p>I&apos;m a huge fan of macOS apps! I use <b>Alfred 4</b> with the Powerpack to quickly move through the OS and perform quick actions. The theme I use is Simple Dark. I also use <b>Bartender 4</b> to remove the clutter in my menu bar. <b>Dato</b> helps me with anything date and time related. I convert videos to high quality GIFs with <b>Gifski</b>. Because I care greatly about my privacy, I&apos;m using <b>Little Snitch</b> for powerful network management and <b>Micro Snitch</b> for camera & microphone usage notifications. <b>Lungo</b> keeps my MacBook awake when needed. I use <b>Rectangle</b> for window management.</p>
			<h2>Configuration</h2>
			<p>Settings and preferences for my browser, terminal, code editor and other apps can be found in my personal <ExtLink target="_blank" rel="noopener noreferrer" href="https://github.com/xxczaki/dotfiles">dotfiles repositiory</ExtLink>.</p>
			<h2>Paid services</h2>
			<p>Since 2018, I use <b>ProtonMail</b> for keeping my emails private. Their paid plan allows me to connect a custom domain. I also pay a small amount for the previously mentioned <b>1Password</b>, even though since February 2021 I only use their local vault feature. To keep non-confidential data synchronized across my devices, I use <b>iCloud</b>. I mostly use <b>Namecheap</b> for registering domains and <b>Vercel</b> for hosting small websites. I also rent a VPS in Iceland via <b>1984 hosting</b>, which I highly recommend for privacy-related reasons. This website is running on it!</p>
		</Main>
	);
};

export default Index;
