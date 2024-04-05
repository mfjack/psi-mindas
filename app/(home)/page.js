import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
	return (
		<section className='container mx-auto p-5 h-screen'>
			<div className='flex flex-col justify-center'>
				<div className='flex items-center gap-5 md:gap-10'>
					<Image
						className='rounded-full'
						src='/profile-mindas.png'
						alt='Jéssica Mindas'
						width={110}
						height={110}
					/>

					<div>
						<h2 className='text-2xl font-thin'>Jéssica Mindas</h2>
						<h3 className='text-base font-thin text-center'>Psicóloga CRP-05/75421</h3>
					</div>
				</div>

				<h1 className='flex justify-center font-semibold text-xl mt-10'>
					Psicologia Clínica e Saúde Mental
				</h1>
				<p className='mt-5 text-lg leading-6'>
					Psicoterapia para adultos e adolescentes voltada ao autoconhecimento e desenvolvimento pessoal.
				</p>
			</div>
			<div className='mt-7 flex justify-center'>
				<Link
					href={'https://wa.me/+5522998851142'}
					target='_blank'
					className='bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-5 rounded-full shadow-md'
				>
					Entrar em contato
				</Link>
			</div>
		</section>
	);
};

export default Home;
