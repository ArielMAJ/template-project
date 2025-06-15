import logoDark from "~/assets/logo-dark.svg";
import logoLight from "~/assets/logo-light.svg";
import Navbar from "~/components/navbars/Navbar";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="flex-1 flex flex-col items-center gap-12 min-h-0 w-full">
          <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
            <header className="flex flex-col items-center gap-6 mt-10">
              <div className="w-[180px] max-w-[80vw] p-4 rounded-full bg-white/70 dark:bg-gray-800/70 shadow-lg">
                <img
                  src={logoLight}
                  alt="Project Logo"
                  className="block w-full dark:hidden"
                />
                <img
                  src={logoDark}
                  alt="Project Logo"
                  className="hidden w-full dark:block"
                />
              </div>
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center drop-shadow-sm">
                Welcome to Your Template Project
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-xl">
                Kickstart your next project with a modern React + Tailwind CSS
                setup. Explore the docs, join the community, and start building!
              </p>
            </header>
            <div className="max-w-[340px] w-full space-y-8 px-4">
              <nav className="rounded-3xl border border-gray-200 p-8 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 shadow space-y-6">
                <p className="leading-6 text-gray-700 dark:text-gray-200 text-center font-medium">
                  Get Started
                </p>
                <ul className="space-y-3">
                  {resources.map(({ href, text, icon }) => (
                    <li key={href}>
                      <a
                        className="group flex items-center gap-3 p-3 rounded-lg transition bg-blue-50 hover:bg-blue-100 dark:bg-gray-700 dark:hover:bg-gray-600 text-blue-700 hover:underline dark:text-blue-400 font-medium"
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {icon}
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <footer className="mt-10 text-gray-400 dark:text-gray-500 text-sm text-center">
              © {new Date().getFullYear()} Your Project. Powered by React &amp;
              Tailwind CSS.
            </footer>
          </div>
        </div>
      </main>
    </>
  );
}

const resources = [
  {
    href: "https://reactrouter.com/docs",
    text: "React Router Docs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-blue-500 group-hover:stroke-blue-700 dark:stroke-blue-300"
      >
        <path
          d="M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: "https://rmx.as/discord",
    text: "Join Discord",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 24 20"
        fill="none"
        className="stroke-blue-500 group-hover:stroke-blue-700 dark:stroke-blue-300"
      >
        <path
          d="M15.0686 1.25995L14.5477 1.17423L14.2913 1.63578C14.1754 1.84439 14.0545 2.08275 13.9422 2.31963C12.6461 2.16488 11.3406 2.16505 10.0445 2.32014C9.92822 2.08178 9.80478 1.84975 9.67412 1.62413L9.41449 1.17584L8.90333 1.25995C7.33547 1.51794 5.80717 1.99419 4.37748 2.66939L4.19 2.75793L4.07461 2.93019C1.23864 7.16437 0.46302 11.3053 0.838165 15.3924L0.868838 15.7266L1.13844 15.9264C2.81818 17.1714 4.68053 18.1233 6.68582 18.719L7.18892 18.8684L7.50166 18.4469C7.96179 17.8268 8.36504 17.1824 8.709 16.4944L8.71099 16.4904C10.8645 17.0471 13.128 17.0485 15.2821 16.4947C15.6261 17.1826 16.0293 17.8269 16.4892 18.4469L16.805 18.8725L17.3116 18.717C19.3056 18.105 21.1876 17.1751 22.8559 15.9238L23.1224 15.724L23.1528 15.3923C23.5873 10.6524 22.3579 6.53306 19.8947 2.90714L19.7759 2.73227L19.5833 2.64518C18.1437 1.99439 16.6386 1.51826 15.0686 1.25995ZM16.6074 10.7755L16.6074 10.7756C16.5934 11.6409 16.0212 12.1444 15.4783 12.1444C14.9297 12.1444 14.3493 11.6173 14.3493 10.7877C14.3493 9.94885 14.9378 9.41192 15.4783 9.41192C16.0471 9.41192 16.6209 9.93851 16.6074 10.7755ZM8.49373 12.1444C7.94513 12.1444 7.36471 11.6173 7.36471 10.7877C7.36471 9.94885 7.95323 9.41192 8.49373 9.41192C9.06038 9.41192 9.63892 9.93712 9.6417 10.7815C9.62517 11.6239 9.05462 12.1444 8.49373 12.1444Z"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    href: "https://tailwindcss.com/docs",
    text: "Tailwind CSS Docs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 24 20"
        fill="none"
        className="stroke-blue-500 group-hover:stroke-blue-700 dark:stroke-blue-300"
      >
        <path
          d="M12 3C7 3 4 7 4 7C4 7 7 11 12 11C17 11 20 7 20 7C20 7 17 3 12 3ZM4 13C4 13 7 17 12 17C17 17 20 13 20 13"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];
