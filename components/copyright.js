const getThisYear = () => new Date().getFullYear()

export default ({linkToDevAccount="https://github.com/9oelm", linkToAuthorAccount = "#", author="Choi Young", developer="Joel Mun"}) => (
    <div>
        <span>© {getThisYear()} </span>
         <a href = "{linkToAuthorAccount}">{author}</a>, website developed by <a href = "{linkToDevAccount}">{developer}
        </a>
    </div>
)

