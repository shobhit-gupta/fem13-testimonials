export const load = async () => {
	const testimonials = (await import('$lib/data/testimonials.json')).default;
	return { testimonials };
};
