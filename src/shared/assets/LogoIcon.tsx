import { ComponentPropsWithRef, FC } from 'react';

export const LogoIcon: FC<ComponentPropsWithRef<'svg'>> = ({ ...props }) => (
    <svg
        width="216"
        height="34"
        viewBox="0 0 216 34"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        {...props}
    >
        <path
            d="M43.1937 27V6.63636H56.9153V10.1861H47.4991V15.0384H56.2093V18.5881H47.4991V23.4503H56.9551V27H43.1937ZM64.0172 6.63636L68.9391 22.108H69.128L74.0598 6.63636H78.8326L71.8127 27H66.2644L59.2346 6.63636H64.0172ZM81.2836 27V6.63636H95.0051V10.1861H85.589V15.0384H94.2992V18.5881H85.589V23.4503H95.0449V27H81.2836ZM115.461 6.63636V27H111.742L102.883 14.1832H102.733V27H98.4281V6.63636H102.206L110.996 19.4432H111.175V6.63636H115.461ZM118.242 10.1861V6.63636H134.967V10.1861H128.732V27H124.477V10.1861H118.242ZM155.504 16.8182C155.504 19.0388 155.084 20.928 154.242 22.4858C153.406 24.0436 152.266 25.2334 150.821 26.0554C149.383 26.8707 147.765 27.2784 145.969 27.2784C144.159 27.2784 142.535 26.8674 141.097 26.0455C139.658 25.2235 138.521 24.0336 137.686 22.4759C136.851 20.9181 136.433 19.0322 136.433 16.8182C136.433 14.5975 136.851 12.7083 137.686 11.1506C138.521 9.5928 139.658 8.40625 141.097 7.59091C142.535 6.76894 144.159 6.35795 145.969 6.35795C147.765 6.35795 149.383 6.76894 150.821 7.59091C152.266 8.40625 153.406 9.5928 154.242 11.1506C155.084 12.7083 155.504 14.5975 155.504 16.8182ZM151.139 16.8182C151.139 15.3797 150.924 14.1667 150.493 13.179C150.069 12.1913 149.469 11.4422 148.693 10.9318C147.918 10.4214 147.01 10.1662 145.969 10.1662C144.928 10.1662 144.02 10.4214 143.244 10.9318C142.469 11.4422 141.866 12.1913 141.435 13.179C141.011 14.1667 140.798 15.3797 140.798 16.8182C140.798 18.2566 141.011 19.4697 141.435 20.4574C141.866 21.4451 142.469 22.1941 143.244 22.7045C144.02 23.215 144.928 23.4702 145.969 23.4702C147.01 23.4702 147.918 23.215 148.693 22.7045C149.469 22.1941 150.069 21.4451 150.493 20.4574C150.924 19.4697 151.139 18.2566 151.139 16.8182ZM158.694 27V6.63636H166.728C168.266 6.63636 169.578 6.91146 170.665 7.46165C171.759 8.00521 172.591 8.77746 173.161 9.77841C173.738 10.7727 174.026 11.9427 174.026 13.2884C174.026 14.6406 173.734 15.804 173.151 16.7784C172.568 17.7462 171.723 18.4886 170.616 19.0057C169.515 19.5227 168.183 19.7812 166.618 19.7812H161.239V16.321H165.922C166.744 16.321 167.427 16.2083 167.971 15.983C168.514 15.7576 168.919 15.4195 169.184 14.9688C169.456 14.518 169.591 13.9579 169.591 13.2884C169.591 12.6122 169.456 12.0421 169.184 11.5781C168.919 11.1141 168.511 10.7628 167.961 10.5241C167.417 10.2789 166.731 10.1562 165.903 10.1562H162.999V27H158.694ZM169.691 17.733L174.752 27H169.999L165.047 17.733H169.691ZM177.069 27V6.63636H185.103C186.641 6.63636 187.953 6.91146 189.04 7.46165C190.134 8.00521 190.966 8.77746 191.536 9.77841C192.113 10.7727 192.401 11.9427 192.401 13.2884C192.401 14.6406 192.109 15.804 191.526 16.7784C190.943 17.7462 190.098 18.4886 188.991 19.0057C187.89 19.5227 186.558 19.7812 184.993 19.7812H179.614V16.321H184.297C185.119 16.321 185.802 16.2083 186.346 15.983C186.889 15.7576 187.294 15.4195 187.559 14.9688C187.831 14.518 187.966 13.9579 187.966 13.2884C187.966 12.6122 187.831 12.0421 187.559 11.5781C187.294 11.1141 186.886 10.7628 186.336 10.5241C185.792 10.2789 185.106 10.1562 184.278 10.1562H181.374V27H177.069ZM188.066 17.733L193.127 27H188.374L183.422 17.733H188.066ZM214.157 16.8182C214.157 19.0388 213.736 20.928 212.894 22.4858C212.059 24.0436 210.919 25.2334 209.474 26.0554C208.035 26.8707 206.418 27.2784 204.621 27.2784C202.812 27.2784 201.188 26.8674 199.749 26.0455C198.311 25.2235 197.174 24.0336 196.339 22.4759C195.503 20.9181 195.086 19.0322 195.086 16.8182C195.086 14.5975 195.503 12.7083 196.339 11.1506C197.174 9.5928 198.311 8.40625 199.749 7.59091C201.188 6.76894 202.812 6.35795 204.621 6.35795C206.418 6.35795 208.035 6.76894 209.474 7.59091C210.919 8.40625 212.059 9.5928 212.894 11.1506C213.736 12.7083 214.157 14.5975 214.157 16.8182ZM209.792 16.8182C209.792 15.3797 209.576 14.1667 209.145 13.179C208.721 12.1913 208.121 11.4422 207.346 10.9318C206.57 10.4214 205.662 10.1662 204.621 10.1662C203.581 10.1662 202.672 10.4214 201.897 10.9318C201.121 11.4422 200.518 12.1913 200.087 13.179C199.663 14.1667 199.451 15.3797 199.451 16.8182C199.451 18.2566 199.663 19.4697 200.087 20.4574C200.518 21.4451 201.121 22.1941 201.897 22.7045C202.672 23.215 203.581 23.4702 204.621 23.4702C205.662 23.4702 206.57 23.215 207.346 22.7045C208.121 22.1941 208.721 21.4451 209.145 20.4574C209.576 19.4697 209.792 18.2566 209.792 16.8182Z"
            fill="#2905C2"
        />
        <rect
            x="1.25"
            y="7.38901"
            width="29.5"
            height="18.8904"
            rx="2.75"
            fill="white"
            stroke="#2905C2"
            strokeWidth="2.5"
        />
        <line
            x1="25.7833"
            y1="5.25"
            x2="25.7833"
            y2="9.16711"
            stroke="#2905C2"
            strokeWidth="2.5"
            strokeLinecap="round"
        />
        <line
            x1="6.58337"
            y1="5.25"
            x2="6.58337"
            y2="9.16711"
            stroke="#2905C2"
            strokeWidth="2.5"
            strokeLinecap="round"
        />
        <path
            d="M11.7333 16.8342L14.9333 20.0428L20.2666 14.6952"
            stroke="#2905C2"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
