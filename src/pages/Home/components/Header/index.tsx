interface IHeaderProps {
    headerText: string
}

const CoffeeHeader = ( { headerText }: IHeaderProps ) => {
    return (
        <div>

        <header>
            <h1>
                {headerText}
            </h1>
        </header>
        </div>
    )
}

export { CoffeeHeader }