import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-background text-brown dark:bg-darkBrown dark:text-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mt-8">
            <h3 className="mb-4 text-6xl font-medium sm:text-4xl">خطای 404</h3>
            <p className="mb-4 text-xl sm:text-lg">
              صفحه ای که دنبالش هستید پیدا نشد!
            </p>
            <Link to="/pets" className="underline">
              صفحه اصلی سایت
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
