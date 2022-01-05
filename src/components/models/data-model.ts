interface Data {
  destinations: [
    {
      name: string;
      images: {
        png: string;
        webp: string;
      };
      description: string;
      distance: string;
      travel: string;
    }
  ];
  crew: [
    {
      name: string;
      images: {
        png: string;
        webp: string;
      };
      role: string;
      bio: string;
    }
  ];
  technology: [
    {
      name: string;
      images: {
        portrait: string;
        landscape: string;
      };
      description: string;
    }
  ];
}

export default Data;

export interface DestinationsData {
    name: string;
    images: {
      png: string;
      webp: string;
    };
    description: string;
    distance: string;
    travel: string;
  }

  export interface CrewData {
    name: string;
    images: {
      png: string;
      webp: string
    };
    role: string;
    bio: string
  }

  export interface TechnologyData {
    name: string;
    images: {
      portrait: string;
      landscape: string
    };
    description: string;
  }