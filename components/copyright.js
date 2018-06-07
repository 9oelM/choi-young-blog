const getThisYear = () => new Date().getFullYear()

export default ({linkToAccount="https://github.com/9oelm", author="Joel Mun"}) => (
    <div>
        <span>© {getThisYear()} </span>
        <a href = "{linkToAccount}">
         {author}
        </a>
    </div>
)

