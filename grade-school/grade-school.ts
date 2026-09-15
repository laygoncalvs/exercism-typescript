
export class GradeSchool {
  private students: { [grade: number]: string[] } = {}

  roster(): { [grade: number]: string[] } {
    const copy: { [grade: number]: string[] } = {}

    for (const grade in this.students) {
      copy[Number(grade)] = [...this.students[grade]]
    }

    return copy
  }

  add(name: string, grade: number): void {
    // Remove o aluno da série anterior, caso ele já esteja cadastrado
    for (const currentGrade in this.students) {
      this.students[currentGrade] = this.students[currentGrade].filter(
        student => student !== name
      )
    }

    // Cria a série caso ela ainda não exista
    if (!this.students[grade]) {
      this.students[grade] = []
    }

    // Adiciona o aluno
    this.students[grade].push(name)

    // Mantém os alunos em ordem alfabética
    this.students[grade].sort()
  }

  grade(grade: number): string[] {
    return this.students[grade] ? [...this.students[grade]] : []
  }
}

