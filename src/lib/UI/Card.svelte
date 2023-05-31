<script lang="ts">
	export let name: string;
	export let imgSrc: string;
</script>

<div class="card">
	<div class="flex items-start gap-4">
		<div class="card__pic-wrapper">
			<img src={imgSrc} alt="Profile pic of {name}" />
		</div>
		<div>
			<h2 class="leading-none">{name}</h2>
			<p class="mt-1 text-xs leading-none opacity-50">Verified Graduate</p>
		</div>
	</div>

	<p class="text-xl font-semibold leading-6">
		<slot name="headline">Headline</slot>
	</p>

	<p class="opacity-70">
		<slot name="text">Text</slot>
	</p>
</div>

<style lang="postcss">
	:global(.card) {
		@apply space-y-4 rounded-lg p-8 pt-7 shadow-lg shadow-veryDarkGrayishBlue/25;
	}
	.card__pic-wrapper {
		@apply h-7 w-7 overflow-hidden rounded-full border-2 border-gray-400 border-opacity-20;
	}
</style>
