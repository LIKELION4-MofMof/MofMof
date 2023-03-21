import { Nav, Lists, IconWrapper } from "components/common/Navigation/Navigation.styled";


const navLists = [
  {
    id: 1,
    title: '검색',
    icon: () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M15.75 15.75L20.25 20.25M17.25 11.25C17.25 14.5637 14.5637 17.25 11.25 17.25C7.93629 17.25 5.25 14.5637 5.25 11.25C5.25 7.93629 7.93629 5.25 11.25 5.25C14.5637 5.25 17.25 7.93629 17.25 11.25Z" stroke="#F26A3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      </svg>
    )
  },
  {
    id: 2,
    title: '필수가이드',
    icon: () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M5 20V14M5 14V4H19L15 9L19 14H5Z" stroke="#F26A3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      </svg>
    )
  },
  {
    id: 3,
    title: '홈',
    icon: () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>  
        <path d="M4.33283 9.28591L11.0828 4.06346C11.623 3.64551 12.377 3.64551 12.9172 4.06347L19.6672 9.28591C20.0348 9.57031 20.25 10.0092 20.25 10.4743V18.7481C20.25 19.5776 19.5784 20.25 18.75 20.25H15.75C14.9216 20.25 14.25 19.5784 14.25 18.75V16.4953C14.25 15.2511 13.2426 14.2425 12 14.2425C10.7574 14.2425 9.75 15.2511 9.75 16.4953V18.75C9.75 19.5784 9.07843 20.25 8.25 20.25H5.25C4.42157 20.25 3.75 19.5776 3.75 18.7481V10.4743C3.75 10.0092 3.96524 9.57031 4.33283 9.28591Z" stroke="#F26A3B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      </svg>
    )
  },
  {
    id: 3,
    title: '다이어리',
    icon: () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M8.25 3.75V6.75M3.75 9.75L20.25 9.75M15.75 3.75V6.75M5.25 20.25H18.75C19.5784 20.25 20.25 19.5784 20.25 18.75V6.75C20.25 5.92157 19.5784 5.25 18.75 5.25H5.25C4.42157 5.25 3.75 5.92157 3.75 6.75V18.75C3.75 19.5784 4.42157 20.25 5.25 20.25Z" stroke="#F26A3B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      </svg>
    )
  },
  {
    id: 4,
    title: '마이페이지',
    icon: () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M12 11.25C14.0711 11.25 15.75 9.57107 15.75 7.5C15.75 5.42893 14.0711 3.75 12 3.75C9.92893 3.75 8.24999 5.42893 8.24999 7.5C8.24999 9.57107 9.92893 11.25 12 11.25Z" stroke="#F26A3B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.74999 18.75C5.92157 18.75 5.23127 18.045 5.61174 17.3091C6.52894 15.5351 9.08088 14.25 12 14.25C14.9191 14.25 17.471 15.5351 18.3882 17.3091C18.7687 18.045 18.0784 18.75 17.25 18.75H6.74999Z" stroke="#F26A3B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </g>  
      </svg>
    )
  },
]


export function Navigation() {
  return (
    <Nav>
      <Lists>
        {navLists.map(({title, icon}) => (
          <li>
            <IconWrapper key={navLists.id} aria-label={title}>
              {icon()}
            </IconWrapper>
          </li>
        ))}
      </Lists>
    </Nav>
  )
}