import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
	return (
		<section className='container mx-auto px-5 py-10 h-screen md:flex flex-col justify-center items-center'>
			<div className='flex flex-col justify-center items-center'>
				<div className='flex items-center gap-5 md:gap-10'>
					<Image
						className='rounded-full lg:w-[140px] lg:h-[140px]'
						src='/gatinha.jpeg'
						alt='Jéssica Mindas'
						width={80}
						height={80}
					/>

					<div className='flex flex-col items-center'>
						<span className='text-2xl font-thin font-cormorant md:text-4xl'>Jéssica Mindas</span>
						<span className='text-base font-thin text-center font-cormorant md:text-xl'>
							Psicóloga CRP-05/75421
						</span>
					</div>
				</div>

				<h1 className='flex justify-center font-semibold text-xl mt-10 md:text-3xl'>
					Psicologia Clínica e Saúde Mental
				</h1>

				<p className='mt-5 text-base leading-6 font-cormorant md:text-2xl'>
					Psicoterapia para adultos e adolescentes voltada ao autoconhecimento e desenvolvimento pessoal.
				</p>
			</div>
			<div className='mt-7 flex justify-center'>
				<Link
					href={'https://wa.me/+5522998851142'}
					target='_blank'
					className='bg-[#395d42] hover:bg-green-700 text-white text-base font-medium py-2 px-5 rounded-full shadow-sm md:text-xl md:py-3 md:px-3'
				>
					✻ Entrar em contato ✻
				</Link>
			</div>
		</section>
	);
};

export default Home;
