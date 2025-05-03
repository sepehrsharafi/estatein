import Image from "next/image";

export default function InformationSection() {
  function InfoItem({
    imgSRC,
    title,
    description,
  }: {
    imgSRC: string;
    title: string;
    description: string;
  }) {
    return (
      <article className="flex flex-col gap-4 p-6 border-[1px] border-[#262626] rounded-[10px]">
        <div className="flex flex-row items-center gap-3">
          <Image
            src={imgSRC}
            width={100}
            height={100}
            alt="image"
            className="h-12 w-12"
          />
          <h3 className="text-white font-semibold text-lg">{title}</h3>
        </div>
        <p className="text-neutral-400 font-medium text-base">{description}</p>
      </article>
    );
  }

  function CTAItem() {
    return (
      <article className="relative flex flex-col gap-4 bg-[#1A1A1A] p-6 border-[1px] border-[#262626] rounded-[10px]">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          width="357"
          height="281"
          viewBox="0 0 357 281"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_172_4350)">
            <path
              d="M-321.043 378.434C-180.095 344.954 -50.8154 372.901 85.7569 410.095C149.175 427.356 212.555 437.796 277.129 419.891C311.3 410.417 343.104 394.805 373.638 377.013C421.486 349.141 462.761 304.71 510.931 279.434C637.445 213.062 712.474 375.8 821.808 401.72C873.198 413.903 903.296 385.975 949.06 371.556C1004.45 354.106 1053.68 383.095 1099.59 411.8"
              stroke="url(#paint0_linear_172_4350)"
              stroke-miterlimit="10"
            />
            <path
              d="M-321.043 352.135C-186.441 315.036 -72.1252 351.68 55.4306 393.63C118.697 414.434 181.793 430.009 247.731 412.956C348.048 387.017 413.436 308.083 497.747 254.897C634.66 168.554 695.673 360.832 815.121 385.312C866.833 395.922 896.08 362.935 941.787 347C999.674 326.821 1053.11 363.162 1099.61 394.217"
              stroke="url(#paint1_linear_172_4350)"
              stroke-miterlimit="10"
            />
            <path
              d="M-321.043 325.969C-190.437 283.773 -90.1581 331.198 29.7831 378.207C94.546 403.577 160.048 424.154 229.054 403.179C331.36 372.087 398.036 287.392 482.612 228.485C626.401 128.348 673.605 342.32 797.107 367.482C849.672 378.188 882.119 341.581 927.126 323.714C990.695 298.476 1049.06 341.43 1099.61 376.729"
              stroke="url(#paint2_linear_172_4350)"
              stroke-miterlimit="10"
            />
            <path
              d="M-321.043 300.276C-262.531 277.975 -205.421 272.84 -144.901 290.84C-89.0216 307.457 -41.0413 341.013 11.6934 364.754C73.9749 392.796 137.961 417.39 206.115 395.051C314.369 359.562 379.529 263.196 467.875 199.268C610.926 95.7398 652.541 316.419 769.982 346.186C829.441 361.249 863.897 317.575 914.453 297.605C982.778 270.605 1046.61 321.005 1099.61 359.183"
              stroke="url(#paint3_linear_172_4350)"
              stroke-miterlimit="10"
            />
            <path
              d="M-321.043 275.474C-268.384 251.62 -215.914 244.192 -160.301 262.836C-105.52 281.196 -61.0252 319.849 -10.5635 346.602C48.1379 377.733 108.544 408.977 176.092 389.044C289.346 355.659 360.436 247.432 448.327 177.403C598.197 57.9779 623.068 298.135 745.85 325.779C808.851 339.971 848.08 289.325 902.179 269.582C974.954 243.036 1044.76 301.034 1099.59 341.619"
              stroke="url(#paint4_linear_172_4350)"
              stroke-miterlimit="10"
            />
            <path
              d="M-321.043 251.923C-199.34 186.554 -126.243 263.878 -27.1189 326.367C29.1769 361.855 89.7916 402.914 158.779 380.063C270.499 343.059 343.994 231.801 428.684 157.811C483.351 110.064 535.688 98.9799 582.513 159.384C623.124 211.754 649.208 287.184 721.472 302.36C784.397 315.567 828.835 263.727 882.82 242.601C962.263 211.489 1040.91 279.51 1099.61 324.093"
              stroke="url(#paint5_linear_172_4350)"
              stroke-miterlimit="10"
            />
            <path
              d="M-321.043 230.02C-203.166 155.917 -129.709 232.862 -36.7415 302.702C12.8489 339.952 68.9932 391.546 135.991 374.057C176.774 363.409 212.934 333.15 244.075 306.434C303.932 255.106 353.617 194.55 410.443 140.323C464.92 88.3315 518.621 67.8684 565.332 136.458C600.148 187.578 626.856 266.55 696.847 277.71C763.39 288.321 812.09 231.213 870.451 211.47C954.63 182.973 1039.49 259.558 1099.61 306.51"
              stroke="url(#paint6_linear_172_4350)"
              stroke-miterlimit="10"
            />
            <path
              d="M-321.043 210.163C-275.09 177.1 -224.382 156.352 -168.389 176.493C-118.533 194.436 -79.7779 236.121 -41.4581 270.851C1.72984 309.996 56.283 379.495 122.58 365.834C159.896 358.141 192.723 329.569 220.605 305.24C282.148 251.525 336.095 189.302 391.425 129.447C443.213 73.4009 500.607 33.081 548.909 111.087C581.433 163.59 606.683 246.636 680.443 249.554C745.907 252.15 795.099 199.855 854.104 180.567C944.609 150.99 1036.42 237.921 1099.63 288.984"
              stroke="url(#paint7_linear_172_4350)"
              stroke-miterlimit="10"
            />
            <path
              d="M-321.043 191.935C-273.877 155.178 -221.332 130.773 -161.759 151.957C-111.487 169.824 -69.8522 210.561 -32.6879 247.186C5.95396 285.289 57.8174 360.131 121.084 347.36C156.487 340.217 187.627 311.588 213.73 288.358C273.416 235.211 326.719 174.618 380.647 115.824C430.029 61.9947 488.03 12.9211 537.014 90.5672C569.064 141.365 593.404 222.441 665.782 223.445C730.677 224.335 784.795 177.213 845.391 161.07C939.703 135.927 1031.88 218.348 1099.61 271.003"
              stroke="url(#paint8_linear_172_4350)"
              stroke-miterlimit="10"
            />
            <path
              d="M-321.043 171.624C-269.009 130.679 -213.49 108.662 -149.882 137.083C-97.2803 160.597 -51.2132 205.085 -10.5067 244.476C26.0136 279.832 71.2662 339.497 128.85 320.91C163.988 309.56 194.541 279.245 220.757 254.878C273.302 206.051 322.135 153.169 371.706 101.367C418.948 51.9715 476.267 3.92115 527.05 72.7947C563.173 121.792 586.168 200.159 658.281 203.74C722.513 206.923 784.624 164.538 846.546 153.169C940.196 135.965 1027.29 200.538 1099.63 250.293"
              stroke="url(#paint9_linear_172_4350)"
              stroke-miterlimit="10"
            />
            <path
              d="M-321.043 149.058C-265.088 106.35 -208.072 87.5736 -142.703 121.3C-92.6206 147.125 -46.4019 188.714 -5.20292 226.666C33.1926 262.041 80.3394 322.994 138.359 296.013C168.647 281.935 193.575 255.125 217.366 232.445C267.411 184.698 314.748 134.07 363.618 85.1484C414.174 34.5401 471.455 -4.69987 523.906 62.5821C560.009 108.908 586.017 181.837 654.474 184.868C717.456 187.672 780.021 157.489 841.489 147.447C936.369 131.948 1020.6 180.34 1099.63 226.969"
              stroke="url(#paint10_linear_172_4350)"
              stroke-miterlimit="10"
            />
            <path
              d="M-321.043 124.654C-256.507 78.081 -194.946 67.5463 -126.224 110.879C-76.8418 142.009 -31.1915 184.186 13.0004 222.213C49.8995 253.969 91.4016 303.819 143.038 274.944C170.693 259.483 193.708 231.914 215.737 209.613C262.638 162.112 308.307 113.456 356.572 67.3189C406.579 19.5148 463.822 -14.9882 517.049 45.4158C556.789 90.5105 584.312 162.435 652.598 168.952C712.777 174.693 778.355 151.161 837.549 141.99C932.145 127.344 1015.38 160.786 1099.59 201.618"
              stroke="url(#paint11_linear_172_4350)"
              stroke-miterlimit="10"
            />
            <path
              d="M-321.043 98.8662C-251.128 51.82 -186.838 46.78 -116.772 96.0052C-63.9044 133.142 -16.3977 180.074 33.8746 220.773C68.4438 248.74 106.688 287.089 149.895 254.954C178.459 233.714 201.777 201.712 225.493 175.641C265.593 131.588 306.697 88.1231 350.813 48.0684C404.874 -1.02412 463.5 -24.2156 517.939 34.9569C557.793 78.2704 588.328 145.874 653.811 153.207C715.789 160.142 782.806 143.866 844.197 135.435C934.475 123.043 1014.83 143.222 1099.61 174.618"
              stroke="url(#paint12_linear_172_4350)"
              stroke-miterlimit="10"
            />
            <path
              d="M-321.043 72.0936C-241.335 22.2432 -173.579 27.5485 -100.406 85.982C-44.8866 130.319 2.43071 181.912 60.2987 223.748C100.001 252.434 128.623 268.634 164.859 228.655C226.44 160.71 276.314 83.2726 348.464 24.6874C401.426 -18.304 459.692 -34.3335 512.465 15.7064C557.054 57.9779 587.059 122.873 651.424 138.106C710.845 152.146 785.42 138.296 845.163 130.148C933.339 118.117 1012.91 125.184 1099.63 146.557"
              stroke="url(#paint13_linear_172_4350)"
              stroke-miterlimit="10"
            />
            <path
              d="M-321.043 44.7905C-231.788 -7.29569 -159.107 9.62425 -83.8504 76.2999C-29.9413 124.066 14.8946 179.373 76.0775 218.613C120.989 247.432 144.629 252.529 175.353 206.639C224.034 133.938 273.037 59.6263 343.956 6.00532C401.294 -37.3651 459.389 -47.104 515.42 2.89796C562.074 44.5442 595.279 111.542 661.255 126.283C719.767 139.357 788.053 133.142 847.039 125.108C932.676 113.437 1013.12 108.169 1099.63 117.813"
              stroke="url(#paint14_linear_172_4350)"
              stroke-miterlimit="10"
            />
            <path
              d="M-321.043 17.3927C-223.757 -36.323 -147.647 -9.85355 -70.5341 63.6431C-15.962 115.654 29.0254 179.184 96.2129 216.055C146.087 243.434 163.59 229.205 187.381 182.272C225.227 107.639 273.094 32.2095 343.199 -16.4093C402.544 -57.5819 462.571 -58.8513 518.318 -11.5398C566.942 29.7464 602.364 95.0009 667.506 113.304C807.222 152.563 959.27 93.8831 1099.63 89.0136"
              stroke="url(#paint15_linear_172_4350)"
              stroke-miterlimit="10"
            />
            <path
              d="M-321.043 -9.68302C-272.646 -35.4703 -227.147 -50.7798 -172.992 -32.003C-128.194 -16.4662 -91.503 16.1422 -58.6385 49.3569C-4.42631 104.19 41.9249 177.971 114.151 210.561C168.325 235.003 181.149 202.072 199.428 156.125C229.224 81.1694 274.212 4.37589 344.506 -39.5061C497.709 -135.171 553.001 58.3947 674.893 100.363C817.243 149.38 960.426 87.5357 1099.63 60.5737"
              stroke="url(#paint16_linear_172_4350)"
              stroke-miterlimit="10"
            />
            <path
              d="M-321.043 -36.0009C-270.562 -62.7166 -224.041 -77.6092 -168.9 -57.3166C-122.644 -40.3019 -85.2521 -5.53358 -51.7436 29.6895C0.953255 85.0725 55.4496 180.946 134.059 203.001C189.086 218.443 197.761 166.944 211.703 125.487C236.1 52.919 278.151 -27.0956 348.502 -65.4829C494.546 -145.175 568.098 34.0095 678.359 84.6557C823.02 151.104 963.097 82.9694 1099.61 32.9863"
              stroke="url(#paint17_linear_172_4350)"
              stroke-miterlimit="10"
            />
            <path
              d="M-321.043 -61.1061C-270.07 -88.845 -224.154 -103.908 -168.048 -84.2597C-121.526 -67.965 -83.5094 -31.6051 -50.4366 3.82639C3.22629 61.3315 60.7533 170.563 144.193 186.858C200.906 197.942 208.861 141.27 221.25 98.7146C242.521 25.7106 280.822 -55.0998 354.336 -89.0534C500.588 -156.601 579.463 15.4221 687.338 71.0515C743.501 100.003 816.22 114.839 878.785 104.759C958.096 91.9883 1030.63 44.98 1099.63 6.83901"
              stroke="url(#paint18_linear_172_4350)"
              stroke-miterlimit="10"
            />
            <path
              d="M-321.043 -84.6007C-266.755 -115.996 -214.285 -134.091 -154.182 -106.959C-109.081 -86.5902 -73.2997 -49.1503 -40.9656 -12.8093C7.48825 41.6453 68.5575 156.371 150.065 164.973C211.419 171.453 219.166 104.437 232.312 59.1905C252.636 -10.7441 289.233 -85.7186 362.898 -112.7C508.051 -165.885 591.984 -6.4051 696.714 55.9127C749.638 87.4031 818.815 108.965 880.718 101.254C963.646 90.9084 1035.42 30.8832 1099.59 -17.5272"
              stroke="url(#paint19_linear_172_4350)"
              stroke-miterlimit="10"
            />
            <path
              d="M-321.043 -106.03C-269.786 -138.695 -219.324 -161.432 -158.766 -136.971C-110.237 -117.361 -71.5949 -75.7334 -38.2568 -36.8346C9.40141 18.7758 69.3341 132.952 154.005 134.961C214.374 136.382 225.549 68.3989 239.794 23.0011C261.823 -47.1419 296.658 -115.182 373.923 -135.02C521.879 -173.028 604.031 -27.2093 709.898 42.7442C761.724 77.001 830.843 105.251 893.977 96.1378C976.546 84.2009 1042.88 15.5548 1099.61 -39.5061"
              stroke="url(#paint20_linear_172_4350)"
              stroke-miterlimit="10"
            />
            <path
              d="M-321.043 -124.959C-273.991 -159.083 -225.12 -187.674 -165.282 -167.628C-118.647 -152.015 -81.9183 -113.78 -50.5313 -77.5145C0.877485 -18.1336 52.5893 87.4977 141.087 94.243C208.369 99.3588 225.852 33.9526 245.211 -17.7925C271.616 -88.3902 308.421 -148.169 389.285 -159.102C532.638 -178.485 615.245 -55.1945 714.842 22.4137C764.773 61.3126 832.377 98.563 897.709 92.1967C984.369 83.7462 1048.15 3.14429 1099.61 -58.6429"
              stroke="url(#paint21_linear_172_4350)"
              stroke-miterlimit="10"
            />
            <path
              d="M-321.043 -139.889C-274.218 -172.573 -225.935 -199.478 -167.29 -180.379C-121.621 -165.506 -85.271 -128.956 -54.2629 -93.7902C-4.31264 -37.1756 48.5547 71.5063 134.514 74.481C200.982 76.7736 223.731 17.8853 247.56 -33.8788C278.114 -100.213 319.464 -160.94 397.884 -171.531C536.218 -190.213 622.632 -75.0324 720.809 -1.36516C768.978 34.7674 836.924 71.5252 898.788 70.3126C985.278 68.6073 1049.34 -13.6809 1099.61 -73.7439"
              stroke="url(#paint22_linear_172_4350)"
              stroke-miterlimit="10"
            />
            <path
              d="M-321.043 -150.102C-274.957 -181.649 -227.374 -207.815 -169.885 -190.422C-125.466 -176.988 -89.6467 -142.769 -59.131 -109.27C-9.97632 -55.2893 42.6637 52.2558 125.838 52.7673C191.056 53.1652 218.825 1.24955 247.295 -49.3209C282.072 -111.089 327.723 -170.356 403.359 -180.74C536.692 -199.024 626.761 -95.7229 724.995 -26.963C772.691 6.42217 839.897 43.6726 898.921 48.94C984.975 56.6136 1050.08 -26.4893 1099.59 -84.3924"
              stroke="url(#paint23_linear_172_4350)"
              stroke-miterlimit="10"
            />
            <path
              d="M-321.043 -156.43C-276.832 -186.651 -229.572 -212.779 -174.356 -198.758C-127.285 -186.822 -89.8929 -151.22 -57.8429 -116.754C-9.12393 -64.365 39.7277 32.9484 121.122 29.3295C182.702 26.6011 214.089 -20.1609 246.253 -66.184C285.747 -122.723 333.424 -175.737 405.745 -186.007C537.071 -204.67 629.072 -115.371 731.246 -51.6703C778.449 -22.2262 838.344 12.6937 892.727 26.7716C980.883 49.5842 1048.01 -33.0451 1099.61 -91.4029"
              stroke="url(#paint24_linear_172_4350)"
              stroke-miterlimit="10"
            />
            <path
              d="M-321.043 -159.689C-278.044 -189.455 -231.788 -216.152 -177.481 -205.106C-132.266 -195.897 -95.5187 -164.217 -64.018 -132.405C-14.6171 -82.5355 31.3742 7.02849 110.23 3.52323C170.049 0.870608 206.02 -38.502 242.616 -80.925C286.467 -131.742 337.08 -180.02 406.617 -190.137C532.392 -208.441 628.769 -137.047 732.136 -80.2429C783.431 -52.0493 837.378 -17.5841 891.23 5.22848C977.928 41.9673 1046.08 -37.5356 1099.59 -95.5334"
              stroke="url(#paint25_linear_172_4350)"
              stroke-miterlimit="10"
            />
            <path
              d="M-321.043 -160.693C-230.576 -224.849 -152.326 -224.527 -70.1742 -148.453C-19.7315 -101.748 23.1344 -21.582 99.2247 -24.3104C157.093 -26.3946 197.326 -58.3019 238.108 -95.7608C286.164 -139.889 339.107 -182.577 405.878 -192.506C525.724 -210.335 627.197 -158.704 731.492 -109.725C788.905 -82.7629 835.351 -48.9419 888.825 -16.1441C973.268 35.6389 1042.2 -38.2936 1099.63 -97.5039"
              stroke="url(#paint26_linear_172_4350)"
              stroke-miterlimit="10"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_172_4350"
              x1="389.275"
              y1="263.646"
              x2="389.275"
              y2="429.215"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#333333" />
              <stop offset="1" stop-color="#333333" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_172_4350"
              x1="389.285"
              y1="232.75"
              x2="389.285"
              y2="420.234"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#333333" />
              <stop offset="1" stop-color="#333333" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_172_4350"
              x1="389.285"
              y1="201.972"
              x2="389.285"
              y2="411.84"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#333333" />
              <stop offset="1" stop-color="#333333" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_172_4350"
              x1="389.285"
              y1="171.832"
              x2="389.285"
              y2="403.738"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#333333" />
              <stop offset="1" stop-color="#333333" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_172_4350"
              x1="389.275"
              y1="144.314"
              x2="389.275"
              y2="395.315"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#333333" />
              <stop offset="1" stop-color="#333333" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_172_4350"
              x1="389.285"
              y1="117.963"
              x2="389.285"
              y2="386.661"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#333333" />
              <stop offset="1" stop-color="#333333" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_172_4350"
              x1="389.285"
              y1="92.7195"
              x2="389.285"
              y2="377.57"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#333333" />
              <stop offset="1" stop-color="#333333" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_172_4350"
              x1="389.294"
              y1="67.7094"
              x2="389.294"
              y2="367.586"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#333333" />
              <stop offset="1" stop-color="#333333" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_172_4350"
              x1="389.285"
              y1="50.243"
              x2="389.285"
              y2="348.809"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#333333" />
              <stop offset="1" stop-color="#333333" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_172_4350"
              x1="389.294"
              y1="38.4778"
              x2="389.294"
              y2="324.417"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#333333" />
              <stop offset="1" stop-color="#333333" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_172_4350"
              x1="389.294"
              y1="26.8046"
              x2="389.294"
              y2="302.709"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#333333" />
              <stop offset="1" stop-color="#333333" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_172_4350"
              x1="389.275"
              y1="13.191"
              x2="389.275"
              y2="283.617"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#333333" />
              <stop offset="1" stop-color="#333333" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint12_linear_172_4350"
              x1="389.285"
              y1="-0.196716"
              x2="389.285"
              y2="267.16"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#333333" />
              <stop offset="1" stop-color="#333333" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint13_linear_172_4350"
              x1="389.294"
              y1="-15.3088"
              x2="389.294"
              y2="252.541"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#333333" />
              <stop offset="1" stop-color="#333333" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint14_linear_172_4350"
              x1="389.294"
              y1="-30.7277"
              x2="389.294"
              y2="240.702"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#333333" />
              <stop offset="1" stop-color="#333333" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint15_linear_172_4350"
              x1="389.294"
              y1="-47.1698"
              x2="389.294"
              y2="229.902"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#333333" />
              <stop offset="1" stop-color="#333333" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint16_linear_172_4350"
              x1="389.294"
              y1="-65.7454"
              x2="389.294"
              y2="218.863"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#333333" />
              <stop offset="1" stop-color="#333333" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint17_linear_172_4350"
              x1="389.285"
              y1="-85.6169"
              x2="389.285"
              y2="205.804"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#333333" />
              <stop offset="1" stop-color="#333333" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint18_linear_172_4350"
              x1="389.294"
              y1="-104.535"
              x2="389.294"
              y2="188.266"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#333333" />
              <stop offset="1" stop-color="#333333" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint19_linear_172_4350"
              x1="389.275"
              y1="-123.383"
              x2="389.275"
              y2="165.41"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#333333" />
              <stop offset="1" stop-color="#333333" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint20_linear_172_4350"
              x1="389.285"
              y1="-147.254"
              x2="389.285"
              y2="134.983"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#333333" />
              <stop offset="1" stop-color="#333333" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint21_linear_172_4350"
              x1="389.285"
              y1="-174.266"
              x2="389.285"
              y2="94.5255"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#333333" />
              <stop offset="1" stop-color="#333333" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint22_linear_172_4350"
              x1="389.285"
              y1="-186.746"
              x2="389.285"
              y2="74.5459"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#333333" />
              <stop offset="1" stop-color="#333333" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint23_linear_172_4350"
              x1="389.275"
              y1="-195.983"
              x2="389.275"
              y2="52.7696"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#333333" />
              <stop offset="1" stop-color="#333333" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint24_linear_172_4350"
              x1="389.285"
              y1="-202.65"
              x2="389.285"
              y2="30.6564"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#333333" />
              <stop offset="1" stop-color="#333333" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint25_linear_172_4350"
              x1="389.275"
              y1="-207.652"
              x2="389.275"
              y2="14.5755"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#333333" />
              <stop offset="1" stop-color="#333333" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint26_linear_172_4350"
              x1="389.294"
              y1="-207.265"
              x2="389.294"
              y2="1.35925"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#333333" />
              <stop offset="1" stop-color="#333333" stop-opacity="0" />
            </linearGradient>
            <clipPath id="clip0_172_4350">
              <rect
                width="1422"
                height="950"
                fill="white"
                transform="translate(-321.668 -432)"
              />
            </clipPath>
          </defs>
        </svg>

        <h3 className="text-white font-bold text-xl z-10">
          Unlock the Value of Your Property Today
        </h3>
        <button className="z-10 text-white font-medium text-base bg-[#141414] w-full py-3.5  border-[1px] border-[#262626] rounded-[8px]">
          Learn More
        </button>
        <p className="z-10 text-neutral-400 font-medium text-base">
          Ready to unlock the true value of your property? Explore our Property
          Selling Service categories and let us help you achieve the best deal
          possible for your valuable asset.
        </p>
      </article>
    );
  }
  return (
    <section className="mx-4">
      <div className="flex flex-col gap-2">
        <svg
          className="w-16 h-7 2xl:w-20 2xl:h-10"
          viewBox="0 0 46 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_146_11592)">
            <path
              d="M10 20.0111C15.5228 20.0111 20 15.5339 20 10.0111C20 4.48821 15.5228 0.0111084 10 0.0111084C4.47715 0.0111084 0 4.48821 0 10.0111C0 15.5339 4.47715 20.0111 10 20.0111Z"
              fill="#666666"
            />
            <path
              d="M0 30C5.52285 30 10 25.5228 10 20C10 14.4772 5.52285 10 0 10C-5.52285 10 -10 14.4772 -10 20C-10 25.5228 -5.52285 30 0 30Z"
              fill="#141414"
            />
            <path
              d="M20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30Z"
              fill="#141414"
            />
            <path
              d="M0 10C5.52285 10 10 5.52285 10 0C10 -5.52285 5.52285 -10 0 -10C-5.52285 -10 -10 -5.52285 -10 0C-10 5.52285 -5.52285 10 0 10Z"
              fill="#141414"
            />
            <path
              d="M20 10C25.5228 10 30 5.52285 30 0C30 -5.52285 25.5228 -10 20 -10C14.4772 -10 10 -5.52285 10 0C10 5.52285 14.4772 10 20 10Z"
              fill="#141414"
            />
          </g>
          <g clipPath="url(#clip1_146_11592)">
            <path
              d="M30 16.0066C33.3137 16.0066 36 13.3203 36 10.0066C36 6.69291 33.3137 4.00665 30 4.00665C26.6863 4.00665 24 6.69291 24 10.0066C24 13.3203 26.6863 16.0066 30 16.0066Z"
              fill="#333333"
            />
            <path
              d="M24 22C27.3137 22 30 19.3137 30 16C30 12.6863 27.3137 10 24 10C20.6863 10 18 12.6863 18 16C18 19.3137 20.6863 22 24 22Z"
              fill="#141414"
            />
            <path
              d="M36 22C39.3137 22 42 19.3137 42 16C42 12.6863 39.3137 10 36 10C32.6863 10 30 12.6863 30 16C30 19.3137 32.6863 22 36 22Z"
              fill="#141414"
            />
            <path
              d="M24 10C27.3137 10 30 7.31371 30 4C30 0.686292 27.3137 -2 24 -2C20.6863 -2 18 0.686292 18 4C18 7.31371 20.6863 10 24 10Z"
              fill="#141414"
            />
            <path
              d="M36 10C39.3137 10 42 7.31371 42 4C42 0.686292 39.3137 -2 36 -2C32.6863 -2 30 0.686292 30 4C30 7.31371 32.6863 10 36 10Z"
              fill="#141414"
            />
          </g>
          <g clipPath="url(#clip2_146_11592)">
            <path
              d="M42.8 12.8031C44.3464 12.8031 45.6 11.5495 45.6 10.0031C45.6 8.45671 44.3464 7.20312 42.8 7.20312C41.2536 7.20312 40 8.45671 40 10.0031C40 11.5495 41.2536 12.8031 42.8 12.8031Z"
              fill="#333333"
            />
            <path
              d="M39.9992 15.6C41.5456 15.6 42.7992 14.3464 42.7992 12.8C42.7992 11.2536 41.5456 10 39.9992 10C38.4528 10 37.1992 11.2536 37.1992 12.8C37.1992 14.3464 38.4528 15.6 39.9992 15.6Z"
              fill="#141414"
            />
            <path
              d="M45.5988 15.6C47.1452 15.6 48.3988 14.3464 48.3988 12.8C48.3988 11.2536 47.1452 10 45.5988 10C44.0524 10 42.7988 11.2536 42.7988 12.8C42.7988 14.3464 44.0524 15.6 45.5988 15.6Z"
              fill="#141414"
            />
            <path
              d="M39.9992 10C41.5456 10 42.7992 8.74642 42.7992 7.20002C42.7992 5.65363 41.5456 4.40002 39.9992 4.40002C38.4528 4.40002 37.1992 5.65363 37.1992 7.20002C37.1992 8.74642 38.4528 10 39.9992 10Z"
              fill="#141414"
            />
            <path
              d="M45.5988 10C47.1452 10 48.3988 8.74642 48.3988 7.20002C48.3988 5.65363 47.1452 4.40002 45.5988 4.40002C44.0524 4.40002 42.7988 5.65363 42.7988 7.20002C42.7988 8.74642 44.0524 10 45.5988 10Z"
              fill="#141414"
            />
          </g>
          <defs>
            <clipPath id="clip0_146_11592">
              <rect width="20" height="20" fill="white" />
            </clipPath>
            <clipPath id="clip1_146_11592">
              <rect
                width="12"
                height="12"
                fill="white"
                transform="translate(24 4)"
              />
            </clipPath>
            <clipPath id="clip2_146_11592">
              <rect
                width="5.6"
                height="5.6"
                fill="white"
                transform="translate(40 7.20001)"
              />
            </clipPath>
          </defs>
        </svg>
        <h1 className="text-white text-3xl font-semibold xl:text-4xl 2xl:text-5xl">
          Our Journey
        </h1>
        <h2 className="text-neutral-400 text-sm xl:text-base 2xl:text-lg font-medium mb-4 xl:mb-12">
          Our story is one of continuous growth and evolution. We started as a
          small team with big dreams, determined to create a real estate
          platform that transcended the ordinary. Over the years, we've expanded
          our reach, forged valuable partnerships, and gained the trust of
          countless clients.
        </h2>
      </div>
      <div>
        <InfoItem
          title="Valuation Mastery"
          description="Discover the true worth of your property with our expert valuation services."
          imgSRC="/icons/services-valuation-mastery.png"
        />
        <InfoItem
          title="Negotiation Wizardry"
          description="Negotiating the best deal is an art, and our negotiation experts are masters of it."
          imgSRC="/icons/services-negotiation-wizardry.png"
        />
        <InfoItem
          title="Strategic Marketing"
          description="Selling a property requires more than just a listing; it demands a strategic marketing."
          imgSRC="/icons/services-strategic-marketing.png"
        />
        <InfoItem
          title="Closing Success"
          description="A successful sale is not complete until the closing. We guide you through the intricate closing process."
          imgSRC="/icons/services-closing-success.png"
        />
        <CTAItem />
      </div>
    </section>
  );
}
