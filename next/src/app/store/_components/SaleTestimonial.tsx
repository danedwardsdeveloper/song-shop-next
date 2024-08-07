import Sale from './Sale';
import Testimonials from './Testimonials';

export default function SaleTestimonials() {
	return (
		<div className="relative overflow-hidden">
			{/* Decorative background image and gradient */}
			<div aria-hidden="true" className="absolute inset-0">
				<div className="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8">
					<img
						alt=""
						src="https://tailwindui.com/img/ecommerce-images/home-page-02-sale-full-width.jpg"
						className="h-full w-full object-cover object-center"
					/>
				</div>
				<div className="absolute inset-0 bg-white bg-opacity-75" />
				<div className="absolute inset-0 bg-gradient-to-t from-white via-white" />
			</div>

			{/* Sale component */}
			<Sale />

			{/* Testimonials component */}
			<Testimonials />
		</div>
	);
}
