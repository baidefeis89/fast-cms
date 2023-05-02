import { Roboto_Flex } from 'next/font/google';

const font = Roboto_Flex({ subsets: ['latin'] });

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={font.className}>
        sin cosas
        {children}
      </body>
    </html>
  );
}
