<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => 'user/config/site.yaml',
    'modified' => 1446316220,
    'data' => [
        'title' => 'Visual Fantasy',
        'author' => [
            'name' => 'Matt Hong',
            'email' => 'mhong19414@gmail.com',
            'footer' => 'handcrafted by @flamekaizar',
            'footer2' => 'Ported by TeamGrav',
            'url' => 'http://afnizar.com',
            'url2' => 'http://getgrav.org'
        ],
        'taxonomies' => [
            0 => 'category',
            1 => 'tag'
        ],
        'metadata' => [
            'description' => 'Fantasy Premier League + data vis'
        ],
        'summary' => [
            'enabled' => true,
            'format' => 'short',
            'size' => 300,
            'delimiter' => '==='
        ],
        'redirects' => [
            '/redirect-test' => '/',
            '/old/(.*)' => '/new/$1'
        ],
        'routes' => [
            '/something/else' => '/blog/sample-3',
            '/new/(.*)' => '/blog/$1'
        ],
        'blog' => [
            'route' => '/blog'
        ],
        'intro' => 'Hello, I’m Saturn. I’m proud to be a part of milky way',
        'intro_avatar' => 'avatar.png',
        'menu' => [
            0 => [
                'text' => 'External link',
                'link' => '#'
            ]
        ],
        'social' => [
            0 => [
                'icon' => 'send',
                'link' => 'mailto:afnizarhilmi@gmail.com'
            ],
            1 => [
                'icon' => 'twitter',
                'link' => 'http://twitter.com/flamekaizar'
            ],
            2 => [
                'icon' => 'dribbble',
                'link' => 'http://dribbble.com/flamekaizar'
            ],
            3 => [
                'icon' => 'behance',
                'link' => 'http://behance.com/flamekaizar'
            ]
        ]
    ]
];
