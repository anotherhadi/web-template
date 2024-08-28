interface Pages {
  label: string;
  icon?: any;
  link: string;
  child?: Pages[];
}

export const navigation: Pages[] = [
    { label: 'Homepage', link: '/' },
    { label: 'Components', link: '/components',
    child: [
      { label: 'Introduction', link: '/components' },
      { label: 'Introduction', link: '/components' },
      { label: 'Introduction', link: '/components' },
      { label: 'Introduction', link: '/components' },
      { label: 'Introduction', link: '/components' },
    ]
  },
    { label: 'Signup', link: '/signup' },
    { label: 'Login', link: '/signin' },
    { label: 'Elements', link: '/elements' },
    { label: 'Projects', link: '/signin' },
  ];
