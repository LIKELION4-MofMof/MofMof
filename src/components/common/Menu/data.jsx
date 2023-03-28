const menuLists = [
  {
    id: 1,
    title: '붙이류',
    list: ['크레스티드 게코', '리키 에너스', '차화 게코'],
    icon: () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="24" height="24" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_497_1877" transform="scale(0.00390625)" />
          </pattern>
          <image
            id="image0_497_1877"
            width="256"
            height="256"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    ),
  },
  {
    id: 2,
    title: '건계종',
    list: ['펫테일 게코', '레오파드 게코', '바이퍼 게코'],
    icon: () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 20.0001C4.2963 18.0741 6.31111 13.7778 12 12.0001M9 18.3744C10.4425 19.1012 12.9582 19.5331 15.474 17.7068C19.9028 14.4918 20.3861 8.34096 19.7976 4.72072C19.741 4.37263 19.3452 4.21698 19.055 4.41739C17.8519 5.24827 16.5291 6.07034 14 6.00005C11.7604 5.93781 9.39681 5.63692 7.5 7.00005C5.26335 8.6074 4.86429 10.3667 5.0599 12.0001C5.18458 12.5666 5.63189 13.7592 6.5 14.5956"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: '대형종',
    list: ['테구', '비어디 드래곤', '유로 '],
    icon: () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 11C2.44772 11 2 11.4477 2 12C2 12.5522 2.44772 13 3 13V11ZM21 13C21.5523 13 22 12.5522 22 12C22 11.4477 21.5523 11 21 11V13ZM4.97619 11.783C4.85638 11.2439 4.3222 10.904 3.78307 11.0238C3.24394 11.1436 2.90401 11.6778 3.02381 12.2169L4.97619 11.783ZM5.44315 18.4941L6.41934 18.2772L5.44315 18.4941ZM18.5568 18.4941L19.533 18.7111L19.533 18.7111L18.5568 18.4941ZM20.9762 12.2169C21.096 11.6778 20.7561 11.1436 20.2169 11.0238C19.6778 10.904 19.1436 11.2439 19.0238 11.783L20.9762 12.2169ZM17.1849 20.8377L16.7903 19.9188L16.7903 19.9188L17.1849 20.8377ZM18.0184 20.169L17.207 19.5845L18.0184 20.169ZM5.98161 20.169L5.17024 20.7536H5.17024L5.98161 20.169ZM6.81513 20.8377L6.42053 21.7565L6.42053 21.7565L6.81513 20.8377ZM5 15C4.44772 15 4 15.4477 4 16C4 16.5522 4.44772 17 5 17V15ZM19 17C19.5523 17 20 16.5522 20 16C20 15.4477 19.5523 15 19 15V17ZM6.00772 11.8759C5.93922 12.4239 6.32795 12.9237 6.87597 12.9922C7.42399 13.0607 7.92378 12.672 7.99228 12.124L6.00772 11.8759ZM5.31712 7.01926L6.03639 6.32453L5.31712 7.01926ZM5.66785 6.03977L5.77021 5.04502L5.66785 6.03977ZM11 12C11 12.5522 11.4477 13 12 13C12.5523 13 13 12.5522 13 12H11ZM18.6678 3.73614L17.744 3.3533L17.744 3.3533L18.6678 3.73614ZM16 12C16 12.5522 16.4477 13 17 13C17.5523 13 18 12.5522 18 12H16ZM9.59367 6.48938C9.31168 6.96425 9.46804 7.5778 9.94291 7.85979C10.4178 8.14178 11.0313 7.98542 11.3133 7.51055L9.59367 6.48938ZM18.1902 3.02084L18.1379 2.02221L18.1902 3.02084ZM3 13H21V11H3V13ZM3.02381 12.2169L4.46696 18.7111L6.41934 18.2772L4.97619 11.783L3.02381 12.2169ZM8.56695 22H15.4331V20H8.56695V22ZM19.533 18.7111L20.9762 12.2169L19.0238 11.783L17.5807 18.2772L19.533 18.7111ZM15.4331 22C15.8765 22 16.2627 22.0006 16.584 21.977C16.9178 21.9525 17.249 21.8985 17.5795 21.7565L16.7903 19.9188C16.7428 19.9392 16.656 19.9663 16.4375 19.9824C16.2063 19.9993 15.9056 20 15.4331 20V22ZM17.5807 18.2772C17.4782 18.7385 17.4123 19.0319 17.3456 19.2539C17.2825 19.4638 17.2372 19.5426 17.207 19.5845L18.8298 20.7536C19.04 20.4617 19.1646 20.1502 19.2609 19.8296C19.3537 19.5211 19.4368 19.1439 19.533 18.7111L17.5807 18.2772ZM17.5795 21.7565C18.0795 21.5418 18.5117 21.1951 18.8298 20.7536L17.207 19.5845C17.101 19.7317 16.9569 19.8472 16.7903 19.9188L17.5795 21.7565ZM4.46696 18.7111C4.56316 19.1439 4.64632 19.5211 4.73906 19.8296C4.83542 20.1502 4.95999 20.4617 5.17024 20.7536L6.79297 19.5845C6.76281 19.5426 6.71749 19.4638 6.65441 19.2539C6.58769 19.0319 6.52184 18.7385 6.41934 18.2772L4.46696 18.7111ZM8.56695 20C8.09445 20 7.79369 19.9993 7.56253 19.9824C7.34396 19.9663 7.25716 19.9392 7.20974 19.9188L6.42053 21.7565C6.75103 21.8985 7.08216 21.9525 7.41604 21.977C7.73733 22.0006 8.12352 22 8.56695 22V20ZM5.17024 20.7536C5.48833 21.1951 5.92052 21.5418 6.42053 21.7565L7.20974 19.9188C7.04307 19.8472 6.899 19.7317 6.79297 19.5845L5.17024 20.7536ZM5 17H19V15H5V17ZM7.99228 12.124C8.15303 10.838 7.90847 8.26275 6.03639 6.32453L4.59785 7.71398C5.92653 9.08961 6.11858 10.9891 6.00772 11.8759L7.99228 12.124ZM5.56549 7.03451C6.8431 7.16599 8.22939 7.55594 9.27116 8.33217C10.2672 9.07433 11 10.2015 11 12H13C13 9.54234 11.9464 7.83134 10.4661 6.72842C9.03164 5.65956 7.25185 5.19749 5.77021 5.04502L5.56549 7.03451ZM6.03639 6.32453C6.15557 6.44791 6.15992 6.59341 6.12641 6.69364C6.10658 6.75297 6.05858 6.84527 5.95208 6.92428C5.83329 7.01241 5.68914 7.04724 5.56549 7.03451L5.77021 5.04502C4.95097 4.96072 4.41022 5.51926 4.22961 6.05951C4.05796 6.57293 4.13383 7.23357 4.59785 7.71399L6.03639 6.32453ZM17.744 3.3533C17.0117 5.12024 16 8.42079 16 12H18C18 8.75954 18.9261 5.72494 19.5916 4.11898L17.744 3.3533ZM11.3133 7.51055C12.1126 6.16464 14.1522 4.23371 18.2425 4.01947L18.1379 2.02221C13.3796 2.27144 10.7341 4.56893 9.59367 6.48938L11.3133 7.51055ZM19.5916 4.11898C19.9822 3.17655 19.3283 1.95986 18.1379 2.02221L18.2425 4.01947C18.0376 4.0302 17.8695 3.91905 17.7855 3.79107C17.7056 3.66936 17.6809 3.50557 17.744 3.3533L19.5916 4.11898Z"
          fill="white"
        />
      </svg>
    ),
  },
];

export default menuLists;
