import Link from "next/link";

import api from "@/api";

import SearchBox from "./components/SearchBox";

export default async function Home({searchParams}: {searchParams: {query: string}}) {
  const restaurants = await api.search(searchParams.query);
  /*   const restaurants = await api.list(); */

  return (
    <section>
      <SearchBox />
      <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {restaurants.map((restaurant) => {
          return (
            <article key={restaurant.id}>
              <img
                alt={restaurant.name}
                className="mb-3 h-[300px] w-full object-cover"
                src={restaurant.image}
              />
              <h2 className="inline-flex gap-2 text-lg font-bold">
                <Link key={restaurant.id} href={`/${restaurant.id}`}>
                  {restaurant.name}
                </Link>
                <small className="inline-flex gap-1">
                  <span>⭐</span>
                  <span>{restaurant.score}</span>
                  <span className="font-normal opacity-75">({restaurant.ratings})</span>
                </small>
              </h2>
              <p className="opacity-90">{restaurant.description}</p>
            </article>
          );
        })}
      </section>
    </section>
  );
}
