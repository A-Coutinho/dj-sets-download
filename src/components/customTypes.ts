export type DropboxFile = {
    name: string;
    path_lower: string;
    link: string;
    is_downloadable: boolean;
    id: string;
    cover?: string;
};

export const breakpoints = {
    smallphone: "480px",
    phone: "600px",
    tablet: "768px",
    desktop: "1024px",
    largeDesktop: "1440px",
};

export const media = {
    smallphone: `(max-width: ${breakpoints.smallphone})`,
    phone: `(max-width: ${breakpoints.phone})`,
    tablet: `(max-width: ${breakpoints.tablet})`,
    desktop: `(max-width: ${breakpoints.desktop})`,
    largeDesktop: `(max-width: ${breakpoints.largeDesktop})`,
};
