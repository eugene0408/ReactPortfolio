import { 
    BackgroundTextWrapper, 
    BackgroundCover, 
    BackgroundText 
  } from '../pages.styles'


const text = {
    headerSass: `
        .header-content
        color: #fff
        position: relative
        margin-top: 40vh
        &__skills
            display: flex
            justify-content: center
            list-style: none
            text-transform: uppercase
            font-size: 21px
            width: 100%
            margin-bottom: 0
            line-height: 1`,
    html: `
        <html>
            <head>
                <!-- Is Empty -->
            </head>
            <body>
                <img src="t-shirt.jpg">
            </body>
        </html>`,
    starOfDeth: `
        .star-of-deth{
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            border-radius: 50%;
            background: #878787;
            z-index: 1000000;
            animation: destroyPlanet .1s infinite;
        }`,
    ifSad: `
        if( isSad ){
            drinkBeer()
        }`, 
    drinkBeer: `
        const drinkBeer = () => {
            isSad = false;
        }`,
    whileAlive: `
        while(isAlive()){
            eat();
            //sleep();
            code();
        }`
}


export const Background = () => {



  return(
    <>
        <BackgroundTextWrapper>
            <BackgroundText
            top={'35%'}
            left={'20%'}
            angle={20}
            >
                {text.html} 
            </BackgroundText>
        </BackgroundTextWrapper>   
    </>   
  )
}