export type boxObject = {
  title: string;
  subtitle: string;
  content: string[];
  link?: {
    text: string;
    href: string;
  };
};

export type heroContentObj = {
  title: string;
  text: string[];
  buttons: {
    text: string;
    href: string;
    variant: string;
    color: string;
    isCalendly?: boolean;
  }[];
  img?: { src: string; alt: string };
};
