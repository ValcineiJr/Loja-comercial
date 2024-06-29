import Carousel from "./components/Carousel";

const data = {
  resources: [
    {
      title: "Find me on Twitter",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: "https://placeimg.com/300/300/any",
    },
    {
      title: "Welcome to Ark Labs",
      link: "https://ark-labs.co.uk",
      imageUrl: "https://placeimg.com/300/300/animals",
    },
    {
      title: "Some sort of third title",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: "https://placeimg.com/300/300/architecture",
    },
    {
      title: "A personal site perhaps?",
      link: "https://robkendal.co.uk",
      imageUrl: "https://placeimg.com/300/300/nature",
    },
    {
      title: "Super item number five",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: "https://placeimg.com/300/300/people",
    },
    {
      title: "Super item number six",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: "https://placeimg.com/300/300/tech",
    },
    {
      title: "Super item number seven",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: "https://placeimg.com/300/300/animals",
    },
    {
      title: "Super item number eight",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: "https://placeimg.com/300/300/people",
    },
    {
      title: "Super item number the last",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: "https://placeimg.com/300/300/tech",
    },
  ],
};

export default function Page() {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col">
      <div className="flex">
        <aside className="min-w-60 border-r border-slate-950/60">
          <nav className="pt-8 pr-4 ">
            <ul className="flex flex-col gap-6">
              <li>Moda Masculina</li>
              <li>Moda Masculina</li>
              <li>Moda Masculina</li>
              <li>Moda Masculina</li>
              <li>Moda Masculina</li>
              <li>Moda Masculina</li>
              <li>Moda Masculina</li>
            </ul>
          </nav>
        </aside>
        <div className="bg-black w-full  h-80 flex-3 mt-8 ml-8"></div>
      </div>

      <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
        <Carousel title="Hoje" data={data} />
      </div>
    </div>
  );
}
