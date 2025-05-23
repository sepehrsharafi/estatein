import React from "react";
import Image from "next/image";

export default function InformationSectionAlt() {
  function CTAItem({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) {
    return (
      <article className="relative flex flex-col justify-center xl:gap-6 gap-4 bg-[#1A1A1A] p-6 border-[1px] border-[#262626] rounded-[10px] xl:rounded-[12px]">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          width="847"
          height="232"
          viewBox="0 0 847 232"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_170_3177)">
            <path
              d="M-76.7148 327.135C57.8875 290.036 172.203 326.68 299.759 368.63C363.025 389.434 426.121 405.009 492.059 387.956C592.376 362.017 657.764 283.083 742.075 229.897C878.988 143.554 940.001 335.832 1059.45 360.312C1111.16 370.922 1140.41 337.935 1186.11 322C1244 301.821 1297.44 338.162 1343.94 369.217"
              stroke="url(#paint0_linear_170_3177)"
              strokeMiterlimit="10"
            />
            <path
              d="M-76.7148 300.969C53.8907 258.773 154.17 306.198 274.111 353.207C338.874 378.577 404.376 399.154 473.382 378.179C575.688 347.087 642.364 262.392 726.94 203.485C870.73 103.348 917.933 317.32 1041.44 342.482C1094 353.188 1126.45 316.581 1171.45 298.714C1235.02 273.476 1293.38 316.43 1343.94 351.729"
              stroke="url(#paint1_linear_170_3177)"
              strokeMiterlimit="10"
            />
            <path
              d="M-76.7148 275.276C-18.2028 252.975 38.9075 247.84 99.4275 265.84C155.307 282.457 203.287 316.013 256.022 339.754C318.303 367.796 382.289 392.39 450.443 370.051C558.697 334.562 623.858 238.196 712.203 174.268C855.254 70.7398 896.87 291.419 1014.31 321.186C1073.77 336.249 1108.23 292.575 1158.78 272.605C1227.11 245.605 1290.94 296.005 1343.94 334.183"
              stroke="url(#paint2_linear_170_3177)"
              strokeMiterlimit="10"
            />
            <path
              d="M-76.7148 250.474C-24.0559 226.62 28.4136 219.192 84.0275 237.836C138.808 256.196 183.303 294.849 233.765 321.602C292.466 352.733 352.872 383.977 420.42 364.044C533.674 330.659 604.764 222.432 692.655 152.403C842.525 32.9779 867.396 273.135 990.178 300.779C1053.18 314.971 1092.41 264.325 1146.51 244.582C1219.28 218.036 1289.08 276.034 1343.92 316.619"
              stroke="url(#paint3_linear_170_3177)"
              strokeMiterlimit="10"
            />
            <path
              d="M-76.7148 226.923C44.9879 161.554 118.085 238.878 217.209 301.367C273.505 336.855 334.12 377.914 403.107 355.063C514.827 318.059 588.322 206.801 673.012 132.811C727.679 85.0641 780.016 73.9799 826.841 134.384C867.453 186.754 893.536 262.184 965.8 277.36C1028.73 290.567 1073.16 238.727 1127.15 217.601C1206.59 186.489 1285.24 254.51 1343.94 299.093"
              stroke="url(#paint4_linear_170_3177)"
              strokeMiterlimit="10"
            />
            <path
              d="M-76.7148 205.02C41.1616 130.917 114.619 207.862 207.587 277.702C257.177 314.952 313.321 366.546 380.319 349.057C421.102 338.409 457.262 308.15 488.403 281.434C548.26 230.106 597.945 169.55 654.771 115.323C709.248 63.3315 762.949 42.8684 809.66 111.458C844.476 162.578 871.184 241.55 941.175 252.71C1007.72 263.321 1056.42 206.213 1114.78 186.47C1198.96 157.973 1283.82 234.558 1343.94 281.51"
              stroke="url(#paint5_linear_170_3177)"
              strokeMiterlimit="10"
            />
            <path
              d="M-76.7148 185.163C-30.7614 152.1 19.9465 131.352 75.9393 151.493C125.795 169.436 164.55 211.121 202.87 245.851C246.058 284.996 300.611 354.495 366.908 340.834C404.224 333.141 437.051 304.569 464.934 280.24C526.476 226.525 580.423 164.302 635.753 104.447C687.541 48.4009 744.935 8.08101 793.238 86.0872C825.761 138.59 851.011 221.636 924.771 224.554C990.235 227.15 1039.43 174.855 1098.43 155.567C1188.94 125.99 1280.75 212.921 1343.96 263.984"
              stroke="url(#paint6_linear_170_3177)"
              strokeMiterlimit="10"
            />
            <path
              d="M-76.7148 166.935C-29.5491 130.178 22.9962 105.773 82.569 126.957C132.841 144.824 174.476 185.561 211.64 222.186C250.282 260.289 302.145 335.131 365.412 322.36C400.815 315.217 431.955 286.588 458.058 263.358C517.744 210.211 571.047 149.618 624.975 90.824C674.357 36.9947 732.358 -12.0789 781.342 65.5672C813.392 116.365 837.732 197.441 910.11 198.445C975.006 199.335 1029.12 152.213 1089.72 136.07C1184.03 110.927 1276.2 193.348 1343.94 246.003"
              stroke="url(#paint7_linear_170_3177)"
              strokeMiterlimit="10"
            />
            <path
              d="M-76.7148 146.624C-24.681 105.679 30.8382 83.6619 94.4457 112.083C147.048 135.597 193.115 180.085 233.821 219.476C270.342 254.832 315.594 314.497 373.178 295.91C408.316 284.56 438.869 254.245 465.085 229.878C517.63 181.051 566.463 128.169 616.034 76.3672C663.276 26.9715 720.595 -21.0788 771.378 47.7947C807.501 96.7925 830.497 175.159 902.609 178.74C966.842 181.923 1028.95 139.538 1090.87 128.169C1184.52 110.965 1271.62 175.538 1343.96 225.293"
              stroke="url(#paint8_linear_170_3177)"
              strokeMiterlimit="10"
            />
            <path
              d="M-76.7148 124.058C-20.76 81.3504 36.2557 62.5736 101.625 96.2998C151.708 122.125 197.926 163.714 239.125 201.666C277.521 237.041 324.668 297.994 382.687 271.013C412.975 256.935 437.903 230.125 461.695 207.445C511.739 159.698 559.076 109.07 607.946 60.1484C658.503 9.54005 715.783 -29.6999 768.234 37.5821C804.338 83.9083 830.345 156.837 898.802 159.868C961.784 162.672 1024.35 132.489 1085.82 122.447C1180.7 106.948 1264.93 155.34 1343.96 201.969"
              stroke="url(#paint9_linear_170_3177)"
              strokeMiterlimit="10"
            />
            <path
              d="M-76.7148 99.6536C-12.1792 53.081 49.3825 42.5463 118.104 85.8788C167.486 117.009 213.137 159.186 257.329 197.213C294.228 228.969 335.73 278.819 387.366 249.944C415.021 234.483 438.036 206.914 460.065 184.613C506.966 137.112 552.635 88.4557 600.9 42.3189C650.907 -5.48516 708.15 -39.9882 761.377 20.4158C801.117 65.5105 828.64 137.435 896.926 143.952C957.105 149.693 1022.68 126.161 1081.88 116.99C1176.47 102.344 1259.7 135.786 1343.92 176.618"
              stroke="url(#paint10_linear_170_3177)"
              strokeMiterlimit="10"
            />
            <path
              d="M-76.7148 73.8662C-6.79967 26.82 57.4897 21.78 127.556 71.0052C180.424 108.142 227.93 155.074 278.203 195.773C312.772 223.74 351.016 262.089 394.223 229.954C422.788 208.714 446.105 176.712 469.821 150.641C509.921 106.588 551.025 63.1231 595.141 23.0684C649.202 -26.0241 707.828 -49.2156 762.267 9.95686C802.121 53.2704 832.656 120.874 898.139 128.207C960.117 135.142 1027.13 118.866 1088.53 110.435C1178.8 98.043 1259.16 118.222 1343.94 149.618"
              stroke="url(#paint11_linear_170_3177)"
              strokeMiterlimit="10"
            />
            <path
              d="M-76.7148 47.0936C2.99338 -2.75679 70.7491 2.54849 143.922 60.982C199.442 105.319 246.759 156.912 304.627 198.748C344.329 227.434 372.951 243.634 409.187 203.655C470.768 135.71 520.642 58.2726 592.793 -0.312565C645.755 -43.304 704.02 -59.3335 756.793 -9.29361C801.383 32.9779 831.387 97.8725 895.752 113.106C955.173 127.146 1029.75 113.296 1089.49 105.148C1177.67 93.1167 1257.24 100.184 1343.96 121.557"
              stroke="url(#paint12_linear_170_3177)"
              strokeMiterlimit="10"
            />
            <path
              d="M-76.7148 19.7905C12.5402 -32.2957 85.2209 -15.3757 160.478 51.2999C214.387 99.0661 259.223 154.373 320.406 193.613C365.317 222.432 388.957 227.529 419.681 181.639C468.362 108.938 517.365 34.6263 588.284 -18.9947C645.622 -62.3651 703.717 -72.104 759.748 -22.102C806.402 19.5442 839.608 86.5419 905.583 101.283C964.095 114.357 1032.38 108.142 1091.37 100.108C1177 88.4367 1257.45 83.1693 1343.96 92.8135"
              stroke="url(#paint13_linear_170_3177)"
              strokeMiterlimit="10"
            />
            <path
              d="M-76.7148 -7.6073C20.5716 -61.323 96.6808 -34.8535 173.794 38.6431C228.366 90.6535 273.354 154.184 340.541 191.055C390.415 218.434 407.918 204.205 431.709 157.272C469.555 82.6389 517.422 7.20952 587.527 -41.4093C646.872 -82.5819 706.9 -83.8513 762.646 -36.5398C811.27 4.74638 846.692 70.0009 911.834 88.3041C1051.55 127.563 1203.6 68.8831 1343.96 64.0136"
              stroke="url(#paint14_linear_170_3177)"
              strokeMiterlimit="10"
            />
            <path
              d="M-76.7148 -34.683C-28.3179 -60.4703 17.181 -75.7798 71.3363 -57.003C116.134 -41.4662 152.825 -8.85781 185.69 24.3569C239.902 79.1904 286.253 152.971 358.479 185.561C412.653 210.003 425.477 177.072 443.756 131.125C473.552 56.1694 518.54 -20.6241 588.834 -64.5061C742.037 -160.171 797.329 33.3947 919.221 75.3631C1061.57 124.38 1204.75 62.5357 1343.96 35.5737"
              stroke="url(#paint15_linear_170_3177)"
              strokeMiterlimit="10"
            />
            <path
              d="M-76.7148 -61.0009C-26.2342 -87.7166 20.2875 -102.609 75.4279 -82.3166C121.684 -65.3019 159.076 -30.5336 192.585 4.6895C245.281 60.0725 299.778 155.946 378.387 178.001C433.414 193.443 442.089 141.944 456.031 100.487C480.428 27.919 522.48 -52.0956 592.83 -90.4829C738.874 -170.175 812.426 9.00949 922.688 59.6557C1067.35 126.104 1207.42 57.9694 1343.94 7.98635"
              stroke="url(#paint16_linear_170_3177)"
              strokeMiterlimit="10"
            />
            <path
              d="M-76.7148 -86.1061C-25.7417 -113.845 20.1738 -128.908 76.2802 -109.26C122.802 -92.965 160.819 -56.6051 193.892 -21.1736C247.554 36.3315 305.081 145.563 388.521 161.858C445.234 172.942 453.19 116.27 465.578 73.7146C486.85 0.710552 525.15 -80.0998 598.665 -114.053C744.916 -181.601 823.791 -9.57786 931.666 46.0515C987.829 75.003 1060.55 89.8388 1123.11 79.7588C1202.42 66.9883 1274.95 19.98 1343.96 -18.161"
              stroke="url(#paint17_linear_170_3177)"
              strokeMiterlimit="10"
            />
            <path
              d="M-76.7148 -109.601C-22.4269 -140.996 30.0426 -159.091 90.1458 -131.959C135.247 -111.59 171.028 -74.1503 203.363 -37.8093C251.816 16.6453 312.886 131.371 394.393 139.973C455.747 146.453 463.494 79.4367 476.64 34.1905C496.965 -35.7441 533.561 -110.719 607.226 -137.7C752.379 -190.885 836.312 -31.4051 941.042 30.9127C993.967 62.4031 1063.14 83.9652 1125.05 76.2536C1207.97 65.9084 1279.75 5.88322 1343.92 -42.5272"
              stroke="url(#paint18_linear_170_3177)"
              strokeMiterlimit="10"
            />
            <path
              d="M-76.7148 -131.03C-25.4576 -163.695 25.0041 -186.432 85.5619 -161.971C134.091 -142.361 172.733 -100.733 206.071 -61.8346C253.73 -6.22415 313.662 107.952 398.333 109.961C458.702 111.382 469.878 43.3989 484.122 -1.9989C506.152 -72.1419 540.986 -140.182 618.251 -160.02C766.207 -198.028 848.359 -52.2093 954.226 17.7442C1006.05 52.001 1075.17 80.2514 1138.31 71.1378C1220.87 59.2009 1287.21 -9.44521 1343.94 -64.5061"
              stroke="url(#paint19_linear_170_3177)"
              strokeMiterlimit="10"
            />
            <path
              d="M-76.7148 -149.959C-29.6627 -184.083 19.2078 -212.674 79.0458 -192.628C125.681 -177.015 162.41 -138.78 193.797 -102.514C245.206 -43.1336 296.917 62.4977 385.415 69.243C452.697 74.3588 470.181 8.95262 489.539 -42.7925C515.945 -113.39 552.749 -173.169 633.613 -184.102C776.966 -203.485 859.573 -80.1945 959.17 -2.5863C1009.1 36.3126 1076.71 73.563 1142.04 67.1967C1228.7 58.7462 1292.47 -21.8557 1343.94 -83.6429"
              stroke="url(#paint20_linear_170_3177)"
              strokeMiterlimit="10"
            />
            <path
              d="M-76.7148 -164.889C-29.8901 -197.573 18.3933 -224.478 77.0379 -205.379C122.707 -190.506 159.057 -153.956 190.065 -118.79C240.015 -62.1756 292.883 46.5063 378.842 49.481C445.31 51.7736 468.059 -7.11469 491.888 -58.8788C522.442 -125.213 563.792 -185.94 642.212 -196.531C780.546 -215.213 866.96 -100.032 965.137 -26.3652C1013.31 9.76739 1081.25 46.5252 1143.12 45.3126C1229.61 43.6073 1293.67 -38.6809 1343.94 -98.7439"
              stroke="url(#paint21_linear_170_3177)"
              strokeMiterlimit="10"
            />
            <path
              d="M-76.7148 -175.102C-30.6288 -206.649 16.9537 -232.815 74.4428 -215.422C118.862 -201.988 154.681 -167.769 185.197 -134.27C234.352 -80.2893 286.992 27.2558 370.166 27.7673C435.384 28.1652 463.153 -23.7504 491.623 -74.3209C526.401 -136.089 572.051 -195.356 647.687 -205.74C781.02 -224.024 871.089 -120.723 969.323 -51.963C1017.02 -18.5778 1084.23 18.6726 1143.25 23.94C1229.3 31.6136 1294.41 -51.4893 1343.92 -109.392"
              stroke="url(#paint22_linear_170_3177)"
              strokeMiterlimit="10"
            />
            <path
              d="M-76.7148 -181.43C-32.5041 -211.651 14.7564 -237.779 69.9725 -223.758C117.044 -211.822 154.435 -176.22 186.485 -141.754C235.204 -89.365 284.056 7.94842 365.45 4.32948C427.031 1.60107 458.418 -45.1609 490.581 -91.184C530.075 -147.723 577.753 -200.737 650.073 -211.007C781.399 -229.67 873.4 -140.371 975.574 -76.6703C1022.78 -47.2262 1082.67 -12.3063 1137.05 1.77161C1225.21 24.5842 1292.34 -58.0451 1343.94 -116.403"
              stroke="url(#paint23_linear_170_3177)"
              strokeMiterlimit="10"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_170_3177"
              x1="633.613"
              y1="207.75"
              x2="633.613"
              y2="395.234"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#333333" />
              <stop offset="1" stopColor="#333333" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_170_3177"
              x1="633.613"
              y1="176.972"
              x2="633.613"
              y2="386.84"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#333333" />
              <stop offset="1" stopColor="#333333" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_170_3177"
              x1="633.613"
              y1="146.832"
              x2="633.613"
              y2="378.738"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#333333" />
              <stop offset="1" stopColor="#333333" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_170_3177"
              x1="633.603"
              y1="119.314"
              x2="633.603"
              y2="370.315"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#333333" />
              <stop offset="1" stopColor="#333333" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_170_3177"
              x1="633.613"
              y1="92.9628"
              x2="633.613"
              y2="361.661"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#333333" />
              <stop offset="1" stopColor="#333333" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_170_3177"
              x1="633.613"
              y1="67.7195"
              x2="633.613"
              y2="352.57"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#333333" />
              <stop offset="1" stopColor="#333333" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_170_3177"
              x1="633.622"
              y1="42.7094"
              x2="633.622"
              y2="342.586"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#333333" />
              <stop offset="1" stopColor="#333333" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_170_3177"
              x1="633.613"
              y1="25.243"
              x2="633.613"
              y2="323.809"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#333333" />
              <stop offset="1" stopColor="#333333" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_170_3177"
              x1="633.622"
              y1="13.4778"
              x2="633.622"
              y2="299.417"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#333333" />
              <stop offset="1" stopColor="#333333" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_170_3177"
              x1="633.622"
              y1="1.80463"
              x2="633.622"
              y2="277.709"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#333333" />
              <stop offset="1" stopColor="#333333" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_170_3177"
              x1="633.603"
              y1="-11.809"
              x2="633.603"
              y2="258.617"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#333333" />
              <stop offset="1" stopColor="#333333" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_170_3177"
              x1="633.613"
              y1="-25.1967"
              x2="633.613"
              y2="242.16"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#333333" />
              <stop offset="1" stopColor="#333333" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint12_linear_170_3177"
              x1="633.622"
              y1="-40.3088"
              x2="633.622"
              y2="227.541"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#333333" />
              <stop offset="1" stopColor="#333333" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint13_linear_170_3177"
              x1="633.622"
              y1="-55.7277"
              x2="633.622"
              y2="215.702"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#333333" />
              <stop offset="1" stopColor="#333333" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint14_linear_170_3177"
              x1="633.622"
              y1="-72.1698"
              x2="633.622"
              y2="204.902"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#333333" />
              <stop offset="1" stopColor="#333333" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint15_linear_170_3177"
              x1="633.622"
              y1="-90.7454"
              x2="633.622"
              y2="193.863"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#333333" />
              <stop offset="1" stopColor="#333333" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint16_linear_170_3177"
              x1="633.613"
              y1="-110.617"
              x2="633.613"
              y2="180.804"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#333333" />
              <stop offset="1" stopColor="#333333" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint17_linear_170_3177"
              x1="633.622"
              y1="-129.535"
              x2="633.622"
              y2="163.266"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#333333" />
              <stop offset="1" stopColor="#333333" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint18_linear_170_3177"
              x1="633.603"
              y1="-148.383"
              x2="633.603"
              y2="140.41"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#333333" />
              <stop offset="1" stopColor="#333333" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint19_linear_170_3177"
              x1="633.613"
              y1="-172.254"
              x2="633.613"
              y2="109.983"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#333333" />
              <stop offset="1" stopColor="#333333" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint20_linear_170_3177"
              x1="633.613"
              y1="-199.266"
              x2="633.613"
              y2="69.5255"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#333333" />
              <stop offset="1" stopColor="#333333" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint21_linear_170_3177"
              x1="633.613"
              y1="-211.746"
              x2="633.613"
              y2="49.5459"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#333333" />
              <stop offset="1" stopColor="#333333" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint22_linear_170_3177"
              x1="633.603"
              y1="-220.983"
              x2="633.603"
              y2="27.7696"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#333333" />
              <stop offset="1" stopColor="#333333" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint23_linear_170_3177"
              x1="633.613"
              y1="-227.65"
              x2="633.613"
              y2="5.65645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#333333" />
              <stop offset="1" stopColor="#333333" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_170_3177">
              <rect
                width="1422"
                height="950"
                fill="white"
                transform="translate(-77.3398 -457)"
              />
            </clipPath>
          </defs>
        </svg>

        <div className="flex flex-col w-full gap-4 xl:gap-6 items-start justify-between">
          <h3 className="text-white font-bold text-xl xl:text-2xl 2xl:text-3xl z-10">
            {title}
          </h3>
          <button className="z-10 text-white font-medium text-base 2xl:text-lg bg-[#141414] w-full px-5 py-3.5  border-[1px] border-[#262626] rounded-[8px]">
            Learn More
          </button>
        </div>
        <p className="z-10 text-neutral-400 font-medium text-base 2xl:text-lg">
          {description}
        </p>
      </article>
    );
  }

  function InfoItem({
    infoItems,
  }: {
    infoItems: Array<{ imgSRC: string; title: string; description: string }>;
  }) {
    return (
      <section>
        <div className="bg-[#1A1A1A] grid xl:grid-cols-2 gap-2.5 p-2.5 rounded-[14px] xl:rounded-[16px]">
          {infoItems.map(
            (
              item: { imgSRC: string; title: string; description: string },
              index
            ) => (
              <article
                key={index}
                className="bg-[#141414] flex flex-col gap-4 xl:gap-5 p-6 xl:p-10 border-[1px] border-[#262626] rounded-[10px] xl:rounded-[12px]"
              >
                <div className="flex flex-row items-center gap-3 xl:gap-4 2xl:gap-5">
                  <Image
                    src={item.imgSRC}
                    width={100}
                    height={100}
                    alt="image"
                    className="h-12 w-12 xl:h-14 xl:w-14 2xl:h-20 2xl:w-20"
                  />
                  <h3 className="text-white font-semibold text-lg xl:text-xl 2xl:text-2xl">
                    {item.title}
                  </h3>
                </div>
                <p className="text-neutral-400 font-medium text-base 2xl:text-lg">
                  {item.description}
                </p>
              </article>
            )
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col xl:flex-row gap-5 mx-4 xl:mx-20 2xl:mx-40 my-6 xl:my-10">
      <div className="flex flex-col justify-around gap-0 xl:w-10/12">
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
          <h2 className="text-neutral-400 text-sm xl:text-base 2xl:text-lg font-medium">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary. Over the years, we've
            expanded our reach, forged valuable partnerships, and gained the
            trust of countless clients.
          </h2>
        </div>
        <CTAItem
          title="Unlock Your Investment Potential"
          description="Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership."
        />
      </div>
      <InfoItem
        infoItems={[
          {
            title: "Market Insight",
            description:
              "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions",
            imgSRC: "/icons/services-market-insight.png",
          },
          {
            title: "ROI Assessment",
            description:
              "Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments",
            imgSRC: "/icons/services-ROI-assessment.png",
          },
          {
            title: "Customized Strategies",
            description:
              "Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs",
            imgSRC: "/icons/services-customized-strategies.png",
          },
          {
            title: "Diversification Mastery",
            description:
              "Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations",
            imgSRC: "/icons/services-diversification-mastery.png",
          },
        ]}
      />
    </section>
  );
}
