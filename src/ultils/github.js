async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getGitHubRepos(username) {
  let excluir = ["2A2G", "STUDY_BLOCK"];

  if (!username) {
    throw new Error("El nombre de usuario es requerido");
  }

  await delay(2000);

  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  );

  if (!response.ok) {
    throw new Error(
      `Error al obtener los repositorios: ${response.statusText}`
    );
  }

  const repos = await response.json();
  const reposFiltrados = repos.filter((repo) => !excluir.includes(repo.name));
  return reposFiltrados;
}
