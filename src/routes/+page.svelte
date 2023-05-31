<script lang="ts">
	import Card from '$lib/UI/Card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const testimonials = data.testimonials;
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

<div class="flex min-h-screen items-center justify-center">
	<div
		class="
            m-6
            grid
            max-w-6xl
            grid-cols-1
            gap-6
            md:grid-cols-4
            md:grid-rows-2
            md:gap-x-2
            lg:gap-8
        "
	>
		{#each testimonials as { userPic: imgSrc, userName: name, headline, text }}
			<Card {imgSrc} {name}>
				<svelte:fragment slot="headline">{headline}</svelte:fragment>
				<svelte:fragment slot="text">{text}</svelte:fragment>
			</Card>
		{/each}
	</div>
</div>

<style lang="postcss">
	:global(.card:first-of-type) {
		@apply bg-[url('/images/bg-pattern-quotation.svg')] bg-[position:_right_1.5rem_top] bg-no-repeat md:bg-[position:_right_5rem_top];
	}
	:global(.card:nth-child(1)) {
		@apply bg-moderateViolet text-white md:order-1 md:col-span-2;
	}
	:global(.card:nth-child(2)) {
		@apply bg-veryDarkGrayishBlue text-white md:order-2;
	}
	:global(.card:nth-child(3)) {
		@apply bg-white text-veryDarkGrayishBlue md:order-4;
	}
	:global(.card:nth-child(4)) {
		@apply bg-veryDarkBlackishBlue text-white md:order-5 md:col-span-2;
	}
	:global(.card:nth-child(5)) {
		@apply bg-white text-veryDarkGrayishBlue md:order-3 md:row-span-2;
	}
</style>
