export default function StudentInfo () {
  const name = "Edwin Olaez";
  const githubUrl = "https://github.com/edwinolaez/cprg306-assignments";

  return (
    <div>
      <p>{name}</p>
      <p>
        Github: <a href={githubUrl} target="_blank" rel="noopener noreferrer"></a>
        </p>
    </div>
  )
}