(() => {
  function getMovieInformationById(id: string) {
    console.log({ id });
  }

  function getCastInformationByMovieId(id: string) {
    console.log({ id });
  }

  function getActorBiographyById(id: string) {
    console.log({ id });
  }

  interface Movie {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }

  function createMovie({ cast, description, rating, title }: Movie) {
    console.log({ title, description, rating, cast });
  }

  function checkFullName(fullName: string) {
    console.log({ fullName });
    return true;
  }

  async function createActor(
    fullName: string,
    birthDate: Date
  ): Promise<boolean> {
    if (checkFullName(fullName)) return false;

    console.log("Crear actor");
    return true;
  }

  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    if (isDead) return 1500;
    if (isSeparated) return 2500;
    return isRetired ? 3000 : 4000;
  };
})();
