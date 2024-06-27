interface ILink {
    label: string;
    path: string;
};

export interface IMobileNavigationLinkProps {
    isOpen: boolean;
    links: ILink[];
};