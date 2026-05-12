export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
}
