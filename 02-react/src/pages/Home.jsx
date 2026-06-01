export function HomePage() {
  return (
    <main>
      <section>
        <img src="./pokemon.jpg" width="200" />

        <h1>Encuentra el trabajo de tus sueños</h1>

        <p>
          Unete a la comunidad más grande del desarrolladores y encuentra tu
          proxima oportunidad
        </p>

        <form role="search">
          <div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-search"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
            </span>
            <input
              required
              type="text"
              placeholder="Buscar empleos por titulo habilidad o empresa"
            />

            <button disabled type="submit">
              Buscar
            </button>
          </div>
        </form>
      </section>

      <section>
        <header>
          <h2>¿Por que DevJobs</h2>
          <p>
            DevJobs es la principal plataforma de búsqueda de empleo para
            desarolladores conectamos a las mejores talentos con empresas más
            innovadoras.
          </p>
        </header>

        <footer>
          <article>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-briefcase"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
              <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
              <path d="M12 12l0 .01" />
              <path d="M3 13a20 20 0 0 0 18 0" />
            </svg>
            <h3>Encuentra el trabajo de tus sueños</h3>
            <p>
              busca miles de empleos de las mejores empresas de todo el mundo
            </p>
          </article>

          <article>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-users"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </svg>

            <h3>Conecta con las mejores empresas</h3>
            <p>
              Conecta con las mejores empresas que esten contratando por tus
              habilidades
            </p>
          </article>

          <article>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-buildings"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 21v-15c0 -1 1 -2 2 -2h5c1 0 2 1 2 2v15" />
              <path d="M16 8h2c1 0 2 1 2 2v11" />
              <path d="M3 21h18" />
              <path d="M10 12v0" />
              <path d="M10 16v0" />
              <path d="M10 8v0" />
              <path d="M7 12v0" />
              <path d="M7 16v0" />
              <path d="M7 8v0" />
              <path d="M17 12v0" />
              <path d="M17 16v0" />
            </svg>

            <h3>Obtén el salario que mereces</h3>
            <p>
              Obtén el salario que mereces co nuestra calculadora de salarios.
            </p>
          </article>
        </footer>
      </section>
    </main>
  );
}
