import {
  Nav,
  Lists,
  IconWrapper,
} from 'components/common/Navigation/Navigation.styled';
import { NavLink } from 'react-router-dom';

export function Navigation() {
  const navLists = [
    {
      id: 1,
      title: '검색',
      icon: () => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M15.5 16.5L20 21M17 12C17 15.3137 14.3137 18 11 18C7.68629 18 5 15.3137 5 12C5 8.68629 7.68629 6 11 6C14.3137 6 17 8.68629 17 12Z"
              stroke="#FF5500"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      ),
      link: 'search',
    },
    {
      id: 2,
      title: '필수가이드',
      icon: () => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M5 22V16M5 16V6H19L15 11L19 16H5Z"
              stroke="#FF5500"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      ),
      link: 'essentialGuide',
    },
    {
      id: 3,
      title: '홈',
      icon: () => (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="24" cy="24" r="24" fill="#FF5500" />
          <g>
            <path
              d="M15.055 20.8336L22.93 14.7407C23.5602 14.2531 24.4398 14.2531 25.07 14.7407L32.945 20.8336C33.3739 21.1654 33.625 21.6774 33.625 22.22V31.8728C33.625 32.8405 32.8415 33.625 31.875 33.625H28.125C27.2966 33.625 26.625 32.9534 26.625 32.125V29.2445C26.625 27.793 25.4497 26.6162 24 26.6162C22.5503 26.6162 21.375 27.793 21.375 29.2445V32.125C21.375 32.9534 20.7034 33.625 19.875 33.625H16.125C15.1585 33.625 14.375 32.8405 14.375 31.8728V22.22C14.375 21.6774 14.6261 21.1654 15.055 20.8336Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      ),
      link: '/',
    },
    {
      id: 4,
      title: '다이어리',
      icon: () => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M8.5 5V8M4 11L20.5 11M16 5V8M5.5 21.5H19C19.8284 21.5 20.5 20.8284 20.5 20V8C20.5 7.17157 19.8284 6.5 19 6.5H5.5C4.67157 6.5 4 7.17157 4 8V20C4 20.8284 4.67157 21.5 5.5 21.5Z"
              stroke="#FF5500"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      ),
      link: 'diary',
    },
    {
      id: 5,
      title: '마이페이지',
      icon: () => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M12.4956 13.5C14.5667 13.5 16.2456 11.8211 16.2456 9.75C16.2456 7.67893 14.5667 6 12.4956 6C10.4245 6 8.7456 7.67893 8.7456 9.75C8.7456 11.8211 10.4245 13.5 12.4956 13.5Z"
              stroke="#FF5500"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.2456 21C6.41717 21 5.72687 20.295 6.10735 19.5591C7.02455 17.7851 9.57648 16.5 12.4956 16.5C15.4147 16.5 17.9666 17.7851 18.8839 19.5591C19.2643 20.295 18.574 21 17.7456 21H7.2456Z"
              stroke="#FF5500"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      ),
      link: '/myPage',
    },
  ];

  return (
    <Nav>
      <Lists>
        {navLists.map((item) => (
          <li key={item.id}>
            <NavLink to={`${item.link}`}>
              <IconWrapper aria-label={item.title}>{item.icon()}</IconWrapper>
            </NavLink>
          </li>
        ))}
      </Lists>
    </Nav>
  );
}
