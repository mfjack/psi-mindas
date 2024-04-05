import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
	title: 'Jéssica Mindas - Psicóloga',
	description: '',
};

export default function RootLayout({ children }) {
	return (
		<html lang='pt-BR'>
			<body
				// style={{ background: 'linear-gradient(-45deg, #84ab8d, #4CAF50 50%, #84ab8d 50%, #4CAF50)' }}
				className={`bg-[#84ab8d] ${poppins.className}`}
			>
				{children}
			</body>
		</html>
	);
}
