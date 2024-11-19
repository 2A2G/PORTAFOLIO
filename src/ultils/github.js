export async function getGitHubRepos(username) {
  const excluir = ["2A2G", "STUDY_BLOCK"];

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );

    if (!response.ok) {
      throw new Error("Error al obtener los repositorios");
    }

    const repos = await response.json();
    const reposFiltrados = repos.filter((repo) => !excluir.includes(repo.name));
    return reposFiltrados;
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener los repositorios");
  }
}
