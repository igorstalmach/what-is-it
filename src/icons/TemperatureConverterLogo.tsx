import React from "react";
import IProps from "./assets/IconProps";

export default function TemperatureConverterLogo(props: IProps) {
    const width = props.width ?? 413;
    const height = props.height ?? 61;

    return(
        <svg width={width} height={height} viewBox="0 0 413 61" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              d="M68.911 46.0346L65.588 15.0971H71.635L73.34 34.6264L75.081 15.0971H80.846L82.499 34.6264L84.151 15.0971H90.268L86.893 46.0346H79.475L77.928 31.1459L76.452 46.0346H68.911Z"
              fill="#22331B"
            />
            <path
              d="M92.008 46.0346V15.0971H98.477V22.2865C98.817 21.3021 99.338 20.5726 100.042 20.098C100.745 19.6234 101.565 19.3861 102.502 19.3861C104.331 19.3861 105.661 19.9603 106.493 21.1088C107.325 22.2572 107.741 23.7982 107.741 25.7318V46.0346H101.377V26.1361C101.377 25.5619 101.257 25.0932 101.017 24.7299C100.777 24.3666 100.399 24.1849 99.883 24.1849C99.45 24.1849 99.107 24.3724 98.855 24.7474C98.603 25.1224 98.477 25.5678 98.477 26.0834V46.0346H92.008Z"
              fill="#22331B"
            />
            <path
              d="M115 46.3158C113.536 46.3158 112.419 45.976 111.652 45.2963C110.884 44.6166 110.36 43.6849 110.079 42.5014C109.797 41.3178 109.657 39.976 109.657 38.476C109.657 36.8705 109.815 35.5551 110.131 34.5297C110.448 33.5043 110.99 32.6635 111.757 32.0072C112.525 31.351 113.583 30.7943 114.93 30.3373L118.833 29.0014V26.2943C118.833 24.8764 118.37 24.1674 117.444 24.1674C116.6 24.1674 116.178 24.7416 116.178 25.89V27.4721H110.061C110.049 27.3783 110.043 27.2582 110.043 27.1117C110.043 26.9652 110.043 26.7982 110.043 26.6107C110.043 23.9857 110.662 22.1254 111.898 21.0297C113.134 19.934 115.094 19.3861 117.778 19.3861C119.184 19.3861 120.444 19.6351 121.557 20.1332C122.67 20.6312 123.552 21.3666 124.203 22.3392C124.853 23.3119 125.178 24.5131 125.178 25.9428V46.0346H118.92V42.9057C118.616 44.0072 118.112 44.851 117.409 45.4369C116.706 46.0228 115.903 46.3158 115 46.3158ZM117.479 41.4291C117.995 41.4291 118.346 41.2123 118.534 40.7787C118.721 40.3451 118.815 39.8764 118.815 39.3724V32.0248C117.948 32.3764 117.274 32.8187 116.793 33.3519C116.313 33.8851 116.073 34.6674 116.073 35.6986V39.0912C116.073 40.6498 116.542 41.4291 117.479 41.4291Z"
              fill="#22331B"
            />
            <path
              d="M133.018 46.3158C131.319 46.3158 130.173 45.9555 129.582 45.2348C128.99 44.5141 128.694 43.4096 128.694 41.9213V25.4857H126.918V20.6869H128.694V15.0971H134.811V20.6869H136.586V25.4857H134.811V40.4447C134.811 40.8783 134.881 41.183 135.022 41.3588C135.163 41.5346 135.432 41.6224 135.831 41.6224C136.112 41.6224 136.364 41.599 136.586 41.5521V45.8412C136.446 45.8881 136.006 45.9789 135.268 46.1137C134.53 46.2484 133.78 46.3158 133.018 46.3158Z"
              fill="#22331B"
            />
            <path
              d="M343.75 46.0346V15.0971H349.726V46.0346H343.75Z"
              fill="#22331B"
            />
            <path
              d="M359.306 46.3158C354.103 46.3158 351.502 43.6791 351.502 38.4057V36.3139H357.83V39.4076C357.83 40.0053 357.947 40.474 358.181 40.8139C358.416 41.1537 358.791 41.3236 359.306 41.3236C360.22 41.3236 360.677 40.6381 360.677 39.267C360.677 38.1185 360.437 37.2601 359.957 36.6918C359.476 36.1234 358.89 35.5756 358.199 35.0482L354.841 32.4642C353.787 31.6439 352.984 30.7767 352.433 29.8627C351.882 28.9486 351.607 27.6771 351.607 26.0482C351.607 24.5365 351.967 23.2885 352.688 22.3041C353.409 21.3197 354.364 20.5873 355.553 20.1068C356.743 19.6264 358.029 19.3861 359.412 19.3861C364.521 19.3861 367.076 21.9349 367.076 27.0326V27.5248H360.572V26.5228C360.572 25.9955 360.481 25.4857 360.299 24.9935C360.118 24.5014 359.763 24.2553 359.236 24.2553C358.345 24.2553 357.9 24.724 357.9 25.6615C357.9 26.6107 358.275 27.3549 359.025 27.8939L362.927 30.7416C364.146 31.6205 365.168 32.6635 365.995 33.8705C366.821 35.0775 367.234 36.683 367.234 38.6869C367.234 41.1713 366.528 43.0639 365.116 44.3646C363.704 45.6654 361.767 46.3158 359.306 46.3158Z"
              fill="#22331B"
            />
            <path
              d="M377.429 46.0346V15.0971H383.406V46.0346H377.429Z"
              fill="#22331B"
            />
            <path
              d="M391.175 46.3158C389.476 46.3158 388.331 45.9555 387.739 45.2348C387.147 44.5141 386.851 43.4096 386.851 41.9213V25.4857H385.076V20.6869H386.851V15.0971H392.968V20.6869H394.744V25.4857H392.968V40.4447C392.968 40.8783 393.039 41.183 393.179 41.3588C393.32 41.5346 393.589 41.6224 393.988 41.6224C394.269 41.6224 394.521 41.599 394.744 41.5521V45.8412C394.603 45.8881 394.164 45.9789 393.425 46.1137C392.687 46.2484 391.937 46.3158 391.175 46.3158Z"
              fill="#22331B"
            />
            <path
              d="M397.714 38.0365V30.724C399.179 30.724 400.436 30.6478 401.485 30.4955C402.534 30.3432 403.395 30.0209 404.069 29.5287C404.743 29.0365 405.241 28.2924 405.563 27.2963C405.885 26.3002 406.046 24.9642 406.046 23.2885C406.046 22.5267 405.95 21.8588 405.756 21.2846C405.563 20.7103 405.115 20.4232 404.412 20.4232C403.908 20.4232 403.539 20.5844 403.304 20.9066C403.07 21.2289 402.92 21.6391 402.856 22.1371C402.792 22.6351 402.759 23.1537 402.759 23.6928V26.2592H396.326V21.7943C396.326 19.4271 397.079 17.6723 398.585 16.5297C400.09 15.3871 402.033 14.8158 404.412 14.8158C406.498 14.8158 408.141 15.1908 409.342 15.9408C410.543 16.6908 411.399 17.7836 411.909 19.2191C412.418 20.6547 412.673 22.4096 412.673 24.4838C412.673 26.5111 412.342 28.3217 411.68 29.9154C411.018 31.5092 410.013 32.7631 408.666 33.6771C407.318 34.5912 405.619 35.0482 403.568 35.0482V38.0365H397.714ZM397.521 46.017V40.7787H403.814V46.017H397.521Z"
              fill="#22331B"
            />
          </g>
          <g>
            <path
              d="M163.087 24.542C163.808 24.3316 164.672 24.1406 165.68 23.9691C168.106 23.5563 170.132 23.37 171.756 23.4102C172.677 23.447 173.829 23.6027 175.212 23.8773C176.595 24.1519 177.492 24.4125 177.903 24.659C178.274 24.8772 178.493 25.1828 178.56 25.5758C178.624 25.9518 178.525 26.3553 178.265 26.7865C178.112 27.0235 177.874 27.2045 177.553 27.3296C177.231 27.4546 176.677 27.584 175.891 27.7177C174.951 27.8776 173.498 28.2216 171.531 28.7496C169.563 29.2777 168.41 29.6321 168.072 29.8127C167.975 29.8644 167.943 29.9841 167.975 30.1721C168.024 30.4626 168.251 31.0218 168.656 31.8497C169.276 33.1157 170.067 34.9239 171.029 37.2745C171.992 39.625 172.684 41.4236 173.108 42.6703C173.539 43.9683 173.844 45.1385 174.021 46.1808C174.576 49.4446 173.837 51.2494 171.804 51.5954C170.693 51.7843 169.761 51.266 169.007 50.0403C168.738 49.5938 168.173 46.8416 167.313 41.7836L167.008 39.9894L165.502 30.672L162.683 31.3098C160.937 31.6946 159.487 32.1084 158.331 32.5511C157.802 32.7467 157.195 32.9026 156.512 33.0188C154.94 33.2863 153.391 33.352 151.864 33.2161C150.338 33.0802 149.529 32.7473 149.439 32.2176C149.402 31.9955 149.512 31.7657 149.77 31.5283C150.029 31.2909 150.563 30.9187 151.374 30.4116C151.692 30.2168 152.665 29.6293 154.292 28.6493C154.858 28.3596 155.212 28.1148 155.353 27.9148C155.549 27.7232 156.653 27.1838 158.665 26.2965C160.677 25.4093 162.151 24.8244 163.087 24.542Z"
              fill="#979747"
            />
            <path
              d="M186.903 36.7895C187.449 36.4856 187.978 36.2901 188.491 36.2029C189.345 36.0575 190.08 36.1918 190.696 36.6058C191.311 37.0198 191.69 37.6454 191.832 38.4827C191.888 38.8074 191.906 39.1208 191.887 39.4229C191.85 40.3434 191.698 40.9759 191.432 41.3201C191.165 41.6644 190.572 42.029 189.653 42.4139C188.637 42.8505 187.753 43.1327 187.001 43.2606C186.113 43.4118 185.722 43.8035 185.83 44.4357C185.841 44.5041 185.882 44.6379 185.951 44.8371C186.126 45.3523 186.441 45.6768 186.894 45.8106C187.348 45.9445 188.113 45.9198 189.19 45.7367C189.993 45.6001 191.069 45.3642 192.419 45.0291C193.515 44.7547 194.2 44.5943 194.473 44.5478C195.02 44.4548 195.365 44.5191 195.508 44.7409C195.534 44.7893 195.554 44.8562 195.569 44.9416C195.659 45.4713 195.263 46.1936 194.381 47.1085C193.499 48.0233 192.539 48.6833 191.5 49.0886C190.874 49.3358 190.271 49.5088 189.69 49.6076C188.613 49.7908 187.587 49.7543 186.612 49.4983C185.636 49.2422 184.82 48.7833 184.162 48.1216C183.802 47.7609 183.536 47.4106 183.364 47.0706C183.192 46.7307 183.036 46.256 182.897 45.6467C182.886 45.5783 182.863 45.4722 182.83 45.3284C182.797 45.1847 182.773 45.07 182.758 44.9846C182.622 44.1815 182.584 43.5461 182.645 43.0786C182.835 41.8156 183.326 40.5979 184.12 39.4254C184.914 38.253 185.842 37.3744 186.903 36.7895Z"
              fill="#979747"
            />
            <path
              d="M208.929 33.0952C209.432 32.6404 209.999 32.3593 210.632 32.2517C211.247 32.147 211.851 32.2113 212.445 32.4444C213.038 32.6775 213.53 33.0598 213.919 33.5914C214.446 34.3106 214.938 35.317 215.395 36.6106C215.853 37.9042 216.189 39.1832 216.404 40.4477C216.671 42.0198 216.688 43.151 216.454 43.8414C216.053 44.9997 215.451 45.6472 214.648 45.7838C214.46 45.8158 214.312 45.8234 214.204 45.8067C213.847 45.7794 213.56 45.6435 213.343 45.3992C213.126 45.1549 212.932 44.7395 212.762 44.153C212.592 43.5666 212.395 42.6682 212.171 41.4579C211.736 39.0001 211.398 37.7916 211.159 37.8323C210.937 37.8701 210.65 38.5606 210.298 39.904C209.818 41.8319 209.565 42.8772 209.539 43.0397C209.481 43.4189 209.224 43.8977 208.768 44.4763C208.313 45.0549 207.94 45.3689 207.65 45.4183C207.222 45.491 206.745 45.3964 206.217 45.1346C205.689 44.8728 205.311 44.5413 205.085 44.1403C204.769 43.5259 204.552 42.8683 204.433 42.1677C204.334 41.5867 204.056 40.9878 203.6 40.371C203.143 39.7542 202.725 39.4165 202.346 39.3579C202.309 39.3466 202.265 39.3453 202.214 39.3541C201.616 39.4558 201.396 40.7503 201.556 43.2374C201.66 44.679 201.652 45.665 201.531 46.1954C201.411 46.7258 201.093 47.1315 200.578 47.4125C200.302 47.5474 200.07 47.6308 199.882 47.6628C198.549 47.8895 197.438 46.5226 196.547 43.562C196.118 42.1757 195.831 41.0553 195.685 40.2009C195.36 38.2871 195.624 37.2048 196.478 36.954L196.606 36.9322C196.999 36.8653 197.353 36.9283 197.667 37.121C197.907 37.2912 198.095 37.3646 198.232 37.3414C198.385 37.3152 198.663 37.0834 199.063 36.6461C199.764 35.9114 200.593 35.4627 201.55 35.2999C202.781 35.0906 204.06 35.3741 205.387 36.1504C206.187 36.6122 206.629 36.8359 206.715 36.8213L206.74 36.817C206.737 36.7999 206.772 36.7193 206.844 36.5751C206.916 36.431 207.014 36.2298 207.137 35.9715C207.26 35.7132 207.371 35.4613 207.47 35.2159C207.912 34.2969 208.398 33.59 208.929 33.0952Z"
              fill="#979747"
            />
            <path
              d="M219.159 32.3043C219.421 32.1894 219.996 32.0564 220.885 31.9053C221.244 31.8442 221.853 31.7581 222.713 31.6469C224.038 31.4744 224.903 31.3931 225.309 31.4031C225.715 31.4132 226.067 31.516 226.364 31.7116C227.689 32.5763 228.504 33.9058 228.809 35.7C228.865 36.0247 228.894 36.3537 228.898 36.6871C228.907 37.5647 228.545 38.4835 227.811 39.4434C227.078 40.4034 226.016 41.3444 224.626 42.2667L222.489 43.6588L223.169 47.6573C223.726 50.7273 224.166 53.0525 224.487 54.633C224.569 55.006 224.657 55.4745 224.753 56.0384C224.936 57.1149 224.933 57.9769 224.744 58.6244C224.42 59.7169 223.865 60.33 223.079 60.4637C222.396 60.58 221.737 60.2702 221.101 59.5342C220.815 59.1961 220.573 58.5736 220.375 57.6666C220.177 56.7597 219.73 54.317 219.036 50.3384L218.822 49.0824C218.215 45.5111 217.803 42.8032 217.585 40.9588C217.368 39.1144 217.302 37.7939 217.386 36.9971C217.47 36.2004 217.716 35.7059 218.123 35.5136C218.288 35.4503 218.413 35.4114 218.499 35.3969C219.541 35.2196 220.412 36.2582 221.112 38.5127C221.38 39.3639 221.557 39.7822 221.642 39.7676C221.762 39.7473 222.175 39.4396 222.883 38.8445C223.59 38.2494 224.137 37.7432 224.523 37.3258C224.989 36.8598 225.173 36.3363 225.074 35.7553C225.024 35.4648 224.914 35.2286 224.742 35.0468C224.611 34.8934 223.8 34.8819 222.31 35.0122C221.151 35.1216 220.282 35.133 219.705 35.0466C219.128 34.9602 218.696 34.748 218.41 34.4098C218.327 34.336 218.271 34.2137 218.242 34.0428C218.192 33.7523 218.257 33.4336 218.435 33.0868C218.614 32.74 218.855 32.4791 219.159 32.3043Z"
              fill="#979747"
            />
            <path
              d="M234.091 28.762C234.637 28.4581 235.166 28.2626 235.679 28.1754C236.533 28.03 237.268 28.1644 237.884 28.5783C238.499 28.9923 238.878 29.6179 239.021 30.4552C239.076 30.7799 239.094 31.0933 239.075 31.3954C239.038 32.316 238.886 32.9484 238.62 33.2927C238.353 33.6369 237.76 34.0015 236.841 34.3865C235.825 34.823 234.941 35.1052 234.189 35.2331C233.301 35.3843 232.91 35.776 233.018 36.4082C233.029 36.4766 233.07 36.6104 233.139 36.8096C233.314 37.3248 233.629 37.6493 234.083 37.7832C234.536 37.917 235.301 37.8924 236.378 37.7092C237.181 37.5726 238.257 37.3367 239.607 37.0017C240.703 36.7273 241.388 36.5668 241.661 36.5203C242.208 36.4273 242.553 36.4917 242.696 36.7135C242.722 36.7618 242.742 36.8287 242.757 36.9142C242.847 37.4439 242.451 38.1662 241.569 39.081C240.687 39.9958 239.727 40.6559 238.688 41.0611C238.062 41.3083 237.459 41.4813 236.878 41.5801C235.801 41.7633 234.775 41.7268 233.8 41.4708C232.825 41.2147 232.008 40.7559 231.35 40.0941C230.99 39.7334 230.724 39.3831 230.552 39.0431C230.38 38.7032 230.224 38.2285 230.085 37.6192C230.074 37.5508 230.051 37.4448 230.018 37.301C229.985 37.1572 229.961 37.0426 229.946 36.9571C229.81 36.154 229.772 35.5187 229.833 35.0511C230.023 33.7881 230.514 32.5704 231.308 31.398C232.102 30.2256 233.03 29.3469 234.091 28.762Z"
              fill="#979747"
            />
            <path
              d="M242.856 28.3522C243.253 27.7923 243.588 27.4892 243.862 27.4427C244.187 27.3874 244.57 27.5464 245.011 27.9197C245.453 28.2929 245.775 28.7171 245.979 29.1923C246.304 29.9635 246.522 30.366 246.633 30.3998C246.67 30.4111 246.706 30.4138 246.74 30.408C246.877 30.3847 247.182 30.0603 247.656 29.4346C248.912 27.7263 250.327 26.7385 251.899 26.4711C252.035 26.4478 252.243 26.43 252.523 26.4177C254.272 26.3662 255.208 26.6993 255.33 27.417C255.376 27.6904 255.266 27.9686 254.997 28.2516C254.729 28.5346 254.188 28.9739 253.375 29.5693C252.105 30.4712 251.244 31.2285 250.795 31.8413C250.345 32.454 250.021 33.3135 249.822 34.4198C249.472 36.2904 249.286 37.2627 249.264 37.3369C249.146 37.8844 248.907 38.3383 248.546 38.6985C248.185 39.0588 247.783 39.2767 247.338 39.3523C246.672 39.4657 246.056 39.254 245.49 38.7173C245.001 38.2203 244.509 37.3193 244.015 36.0144C243.52 34.7096 243.126 33.2996 242.833 31.7846C242.807 31.6308 242.768 31.4265 242.716 31.1716C242.664 30.9168 242.631 30.7466 242.616 30.6612C242.5 29.9777 242.459 29.5055 242.494 29.2446C242.528 28.9838 242.649 28.6863 242.856 28.3522Z"
              fill="#979747"
            />
            <path
              d="M262.897 30.5077C262.974 29.6155 262.965 28.8874 262.869 28.3235L262.843 28.1697C262.771 27.9534 262.7 27.8511 262.632 27.8627C262.564 27.8743 262.35 28.1657 261.99 28.7368C261.479 29.5621 261.073 30.3741 260.769 31.1731C260.465 31.972 260.343 32.5423 260.401 32.884C260.459 33.2258 260.582 33.3807 260.77 33.3487C260.787 33.3458 260.995 33.2753 261.393 33.1372C262.019 32.89 262.411 32.6344 262.568 32.3703C262.725 32.1061 262.835 31.4853 262.897 30.5077ZM263.796 24.4735C263.87 24.3906 264.018 24.3302 264.24 24.2924C264.667 24.2198 265.094 24.2967 265.519 24.5233C266.064 24.8349 266.718 25.8842 267.479 27.6712C268.177 29.2931 268.804 30.3731 269.362 30.9113C269.919 31.4494 270.724 31.7609 271.776 31.8457C272.648 31.9083 273.113 32.1105 273.171 32.4522C273.218 32.7256 273.061 33.1479 272.701 33.719C272.08 34.7213 271.283 35.3053 270.309 35.471C269.249 35.6512 268.154 35.3101 267.023 34.4476L265.806 33.4943L265.189 34.364C264.511 35.3409 263.275 35.9819 261.481 36.2871C260.336 36.4819 259.403 36.3461 258.682 35.8798C257.961 35.4134 257.517 34.6932 257.352 33.7192C257.072 32.0788 257.553 30.1509 258.794 27.9354C259.831 26.0711 260.964 25.0344 262.195 24.8251C262.348 24.7989 262.461 24.7885 262.532 24.794C262.638 24.7937 262.801 24.7746 263.023 24.7368C263.416 24.6699 263.674 24.5822 263.796 24.4735Z"
              fill="#979747"
            />
            <path
              d="M273.137 0.625214C273.302 0.456514 273.495 0.353314 273.717 0.315514C274.008 0.266114 274.292 0.362714 274.571 0.605414C274.85 0.848114 275.075 1.21851 275.248 1.71661C275.357 2.04971 275.579 3.19871 275.913 5.16381C276.818 10.4781 277.297 13.8163 277.353 15.1782L277.408 16.1184L279.834 15.4947C280.56 15.3185 281.111 15.1984 281.487 15.1344C282.085 15.0327 282.542 15.0867 282.859 15.2965C283.25 15.5289 283.481 15.8501 283.551 16.2602C283.632 16.7387 283.464 17.198 283.047 17.6382C282.683 18.0868 281.756 18.6841 280.266 19.43L278.128 20.5058L278.302 21.531C278.444 22.1575 278.685 23.1099 279.026 24.3882C279.521 26.0621 279.978 27.2239 280.397 27.8736C280.815 28.5234 281.297 28.8017 281.844 28.7087C282.203 28.6476 282.648 28.4225 283.18 28.0331C283.777 27.6151 284.229 27.3799 284.537 27.3276C284.913 27.2636 285.146 27.4965 285.236 28.0262C285.271 28.2313 285.29 28.3951 285.293 28.5176C285.36 29.8424 284.773 31.0412 283.531 32.114C282.983 32.6117 282.393 32.9143 281.76 33.0218C281.162 33.1236 280.492 33.0617 279.751 32.8362C278.547 32.4784 277.545 31.6553 276.746 30.3672C275.947 29.079 275.269 27.2162 274.714 24.7788C274.39 23.2867 274.16 22.4027 274.026 22.1267C273.891 21.8507 273.624 21.6764 273.224 21.6036C272.54 21.509 272.153 21.1969 272.063 20.6672C272.005 20.3254 272.102 19.966 272.354 19.589C272.689 19.075 273.003 18.7491 273.296 18.6113C273.54 18.4994 273.646 17.4133 273.612 15.3532C273.578 13.293 273.417 10.7489 273.131 7.72071C272.839 4.76381 272.692 2.91631 272.689 2.17831C272.687 1.44031 272.836 0.922614 273.137 0.625214Z"
              fill="#979747"
            />
            <path
              d="M285.811 23.6559C285.725 23.4595 285.663 23.2503 285.625 23.0282C285.515 22.3788 285.606 21.7566 285.901 21.1615C286.195 20.5663 286.616 20.2222 287.163 20.1292C287.539 20.0653 287.958 20.1522 288.42 20.39C288.711 20.5515 288.952 20.8271 289.141 21.2168C289.33 21.6066 289.601 22.3694 289.952 23.5052C290.707 25.979 291.29 27.181 291.7 27.1112C291.717 27.1083 291.757 27.0839 291.819 27.0381C291.984 26.8695 292.211 26.2945 292.502 25.3133C292.792 24.332 292.995 23.4095 293.112 22.5457C293.271 21.5164 293.504 20.7384 293.81 20.2117C294.116 19.6849 294.533 19.3764 295.063 19.2863C295.285 19.2485 295.586 19.2589 295.965 19.3175C296.624 19.4692 297.53 20.7128 298.683 23.0485C299.92 25.5634 300.795 26.7772 301.307 26.69C301.649 26.6319 301.946 26.722 302.197 26.9606C302.34 27.0769 302.423 27.2035 302.446 27.3402C302.473 27.4939 302.416 27.7321 302.278 28.0545C301.805 29.1019 301.108 29.7041 300.185 29.8611C298.972 30.0675 297.737 29.4775 296.482 28.0911L295.941 27.5501L295.453 28.5562C294.8 29.986 293.825 30.8727 292.53 31.2161C292.479 31.2248 292.42 31.2393 292.353 31.2594C292.286 31.2796 292.227 31.2941 292.175 31.3028C291.065 31.4917 290.046 31.1596 289.118 30.3064C288.191 29.4532 287.439 28.1613 286.863 26.4307C286.566 25.4087 286.215 24.4837 285.811 23.6559Z"
              fill="#979747"
            />
            <path
              d="M302.45 18.2143C302.847 17.6545 303.182 17.3513 303.456 17.3048C303.78 17.2495 304.163 17.4085 304.605 17.7818C305.046 18.155 305.369 18.5792 305.573 19.0544C305.898 19.8256 306.116 20.2281 306.227 20.2619C306.264 20.2732 306.3 20.2759 306.334 20.2701C306.47 20.2468 306.776 19.9224 307.249 19.2967C308.506 17.5884 309.92 16.6006 311.493 16.3332C311.629 16.3099 311.837 16.2921 312.116 16.2798C313.866 16.2283 314.802 16.5614 314.924 17.2791C314.97 17.5525 314.859 17.8307 314.591 18.1137C314.323 18.3967 313.782 18.836 312.969 19.4314C311.698 20.3333 310.838 21.0906 310.389 21.7034C309.939 22.3161 309.615 23.1756 309.416 24.282C309.066 26.1525 308.88 27.1248 308.858 27.199C308.74 27.7465 308.5 28.2004 308.14 28.5606C307.779 28.9209 307.377 29.1388 306.932 29.2144C306.266 29.3278 305.65 29.1161 305.084 28.5794C304.595 28.0824 304.103 27.1814 303.608 25.8766C303.114 24.5717 302.72 23.1617 302.427 21.6467C302.401 21.4929 302.362 21.2886 302.31 21.0337C302.258 20.7789 302.224 20.6087 302.21 20.5233C302.094 19.8398 302.053 19.3676 302.088 19.1067C302.122 18.8459 302.243 18.5484 302.45 18.2143Z"
              fill="#979747"
            />
            <path
              d="M320.854 14.0021C321.4 13.6982 321.93 13.5027 322.442 13.4155C323.297 13.2701 324.032 13.4044 324.647 13.8184C325.263 14.2324 325.642 14.858 325.784 15.6953C325.839 16.02 325.857 16.3334 325.838 16.6355C325.802 17.5561 325.65 18.1885 325.383 18.5328C325.116 18.877 324.524 19.2416 323.604 19.6266C322.589 20.0631 321.705 20.3453 320.953 20.4732C320.064 20.6244 319.674 21.0161 319.781 21.6483C319.793 21.7167 319.833 21.8505 319.902 22.0497C320.078 22.5649 320.392 22.8894 320.846 23.0233C321.3 23.1571 322.065 23.1325 323.141 22.9493C323.944 22.8127 325.021 22.5768 326.37 22.2418C327.466 21.9674 328.151 21.8069 328.425 21.7604C328.971 21.6674 329.316 21.7318 329.46 21.9536C329.485 22.0019 329.506 22.0688 329.52 22.1542C329.61 22.684 329.214 23.4062 328.333 24.3211C327.451 25.2359 326.491 25.896 325.452 26.3012C324.826 26.5484 324.222 26.7214 323.641 26.8202C322.565 27.0034 321.539 26.9669 320.563 26.7109C319.588 26.4548 318.772 25.9959 318.114 25.3342C317.754 24.9735 317.487 24.6232 317.315 24.2832C317.143 23.9433 316.988 23.4686 316.849 22.8593C316.837 22.7909 316.815 22.6849 316.782 22.5411C316.748 22.3973 316.724 22.2827 316.71 22.1972C316.573 21.3941 316.536 20.7588 316.597 20.2912C316.786 19.0282 317.278 17.8105 318.072 16.6381C318.866 15.4657 319.793 14.587 320.854 14.0021Z"
              fill="#979747"
            />
          </g>
          <path
            d="M33.3756 14.0172C36.5285 0.783943 16.4026 -4.01126 13.2496 9.22204L7.2908 34.2319C4.3251 36.1545 2.05741 39.1852 1.17151 42.9038C-0.657094 50.5785 4.0823 58.2827 11.757 60.1112C19.4317 61.9398 27.1359 57.2004 28.9645 49.5257C29.8504 45.8072 29.1945 42.0819 27.41 39.0214L27.4144 39.0285L33.3756 14.0172ZM12.9267 55.2105C7.89901 54.0126 4.7934 48.9643 5.9913 43.9367C6.6329 41.2436 8.37851 39.1033 10.6351 37.8787L10.6446 37.8728C10.6655 37.8616 10.6786 37.8404 10.7 37.8273C10.8418 37.7335 10.9754 37.6235 11.0959 37.5003L11.1044 37.4902C11.211 37.4082 11.317 37.3119 11.4124 37.2091L11.4209 37.199C11.4844 37.1027 11.5475 36.982 11.6016 36.8571L11.6067 36.8442C11.6954 36.7013 11.7767 36.5302 11.8383 36.3484L11.8405 36.3388L11.869 36.2788L18.0434 10.3642C18.0557 10.3043 18.0706 10.2329 18.0875 10.162C18.7817 7.24854 21.7058 5.44974 24.6193 6.14394C27.5327 6.83814 29.3315 9.76214 28.6374 12.6756C28.6205 12.7465 28.6017 12.817 28.5833 12.8855L28.5856 12.876L22.4112 38.7905C22.4057 38.8135 22.4141 38.8378 22.4086 38.8608C22.3811 39.0528 22.3765 39.234 22.3908 39.4116L22.3911 39.3934C22.38 39.5508 22.3825 39.6932 22.3974 39.8345L22.3958 39.8158C22.4376 39.9635 22.4892 40.0954 22.5484 40.2209L22.5455 40.2161C22.6005 40.3933 22.6702 40.5517 22.754 40.7013L22.7526 40.6989C22.7657 40.7203 22.766 40.7447 22.7815 40.7646C24.2493 42.8846 24.8422 45.5821 24.2005 48.2752C23.0026 53.3028 17.9543 56.4084 12.9267 55.2105ZM18.8615 40.9284L22.2866 26.5527C22.6017 25.2302 21.7841 23.901 20.4615 23.5859C19.1389 23.2708 17.8098 24.0885 17.4947 25.411L14.0696 39.7867C11.5704 40.2101 9.47981 42.0475 8.86601 44.6236C8.04621 48.0642 10.1706 51.5176 13.6112 52.3373C17.0518 53.1571 20.5052 51.0327 21.3249 47.5921C21.9387 45.016 20.9012 42.4333 18.8981 40.9534L18.8615 40.9284ZM45.3831 8.25334C41.4135 7.30754 37.4285 9.75894 36.4827 13.7285C35.5369 17.6981 37.9884 21.6831 41.958 22.6289C45.9276 23.5747 49.9126 21.1233 50.8584 17.1537C51.7999 13.1851 49.3499 9.20244 45.3831 8.25334ZM43.0997 17.837C41.7771 17.5219 40.9595 16.1928 41.2746 14.8702C41.5897 13.5477 42.9188 12.73 44.2414 13.0451C45.564 13.3603 46.3816 14.6894 46.0665 16.012C45.7495 17.3341 44.4227 18.1502 43.0997 17.837Z"
            fill="#22331B"
          />
        </svg>
    );
}