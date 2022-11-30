import Modal from 'components/template/Modal'
import React from 'react'

interface FavoriteSubjectsProps {
  close: () => void
}

export default function FavoriteSubjects({close}: FavoriteSubjectsProps) {
  return (
    <Modal closeModal={close}>
      <div>

      </div>
    </Modal>
  )
}
