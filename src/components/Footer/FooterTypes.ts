export type FooterItem = string | { label: string; href: string };

export type FooterColumnProps = {
    title: string;
    items: FooterItem[];
    routing?: string[];
};

export type FooterLinksProps = {
    id: number;
    name: string;
    href?: string;
};
