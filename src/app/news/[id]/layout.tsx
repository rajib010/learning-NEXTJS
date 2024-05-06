function NewsLayout({children}){
    return(
        <div>
            <h1 style={{backgroundColor:'blue'}}>News Header</h1>
            {children}

            <h1 style={{backgroundColor:'red'}}>News Footer</h1>
        </div>
    )
}

export default NewsLayout;