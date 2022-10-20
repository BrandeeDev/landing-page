/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'hero_mobile': "url('./assets/image-hero-mobile.png')",
                'hero_tablet': "url('./assets/image-hero-tablet@2x.png')",
                'hero_desktop':"url('./assets/image-hero-desktop@2x.png')",

            },
            colors:{
                white_bg:'#F2F2F2',
                skilled_col:'#13183F',
                btn_gradient:{
                    start:'#FF6F48',
                    end:'#F02AA6',
                },
                box_gradient:{
                    start:'#FFFFFF',
                    end:'#F0F1FF',
                },
                btnFooter_gradient : {
                    start:'#4851FF',
                    end:'#F02AA6'
                },

            },
            fontFamily:{
                plus_jakarta_s:['Plus Jakarta Sans',' sans-serif'],
            }

        },



    },
    plugins: [],
}
