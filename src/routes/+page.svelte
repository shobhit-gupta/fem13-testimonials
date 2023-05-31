<script lang="ts">
	import Card from '$lib/UI/Card.svelte';

	const testimonials = [
		{
			userPic: '/images/image-daniel.jpg',
			userName: 'Daniel Clifford',
			headline:
				'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
			text: '“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experince here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”',
			styles: 'bg-moderateViolet text-white'
		},
		{
			userPic: '/images/image-jonathan.jpg',
			userName: 'Jonathan Walters',
			headline: 'The team was very supportive and kept me motivated',
			text: '“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”',
			styles: 'bg-veryDarkGrayishBlue text-white'
		},
		{
			userPic: '/images/image-jeanette.jpg',
			userName: 'Jeanette Harmon',
			headline: 'An overall wonderful and rewarding experience',
			text: '“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”',
			styles: 'bg-white text-veryDarkGrayishBlue'
		},
		{
			userPic: '/images/image-patrick.jpg',
			userName: 'Patrick Abrams',
			headline:
				'Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.',
			text: '“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”',
			styles: 'bg-veryDarkBlackishBlue text-white'
		},
		{
			userPic: '/images/image-kira.jpg',
			userName: 'Kira Whittle',
			headline: 'Such a life-changing experience. Highly recommended!',
			text: '“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”',
			styles: 'bg-white text-veryDarkGrayishBlue'
		}
	];
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@500;600&display=swap"
		rel="stylesheet"
	/>
	<title>Testimonials Grid Section Challenge</title>
</svelte:head>

<!-- <div
	class="flex min-h-screen items-center justify-center text-center align-middle text-5xl font-semibold text-white"
>
	<div class="grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-4 md:grid-rows-2 md:gap-8">
		<div class="h-full w-full bg-red-500 md:order-1 md:col-span-2">
			<div class="flex h-full items-center justify-center p-32">1</div>
		</div>
		<div class="h-full w-full bg-yellow-500 md:order-2">
			<div class="flex h-full items-center justify-center p-32">2</div>
		</div>
		<div class="h-full w-full bg-purple-500 md:order-4">
			<div class="flex h-full items-center justify-center p-32">3</div>
		</div>
		<div class="h-full w-full bg-gray-500 md:order-5 md:col-span-2">
			<div class="flex h-full items-center justify-center p-32">4</div>
		</div>
		<div class="h-full w-full bg-orange-600 md:order-3 md:row-span-2">
			<div class="flex h-full items-center justify-center p-32">5</div>
		</div>
	</div>
</div> -->

<!-- Centered container -->
<div
	class="
        flex
        min-h-screen
        items-center
        justify-center
    "
>
	{#each testimonials as { styles, userPic: imgSrc, userName: name, headline, text }}
		<Card class={styles} {imgSrc} {name}>
			<svelte:fragment slot="headline">{headline}</svelte:fragment>
			<svelte:fragment slot="text">{text}</svelte:fragment>
		</Card>
	{/each}
</div>

<style lang="postcss">
	:global(.card:first-of-type) {
		@apply bg-[url('/images/bg-pattern-quotation.svg')] bg-[position:_right_1.5rem_top] bg-no-repeat md:bg-[position:_right_5rem_top];
	}
</style>
