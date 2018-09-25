export interface Checkable {
    isChecked(): boolean
    setChecked(checked: boolean)
    toggleChecked()
}