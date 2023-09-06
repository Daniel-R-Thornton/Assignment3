// simple modal component with an ok and cancel button
import React from 'react'

export const Modal = ({
  title,
  content,
  onOk,
  onCancel,
  isOpen
}: {
  title: string
  content: string
  onOk: () => void
  onCancel: () => void
  isOpen: boolean
}) => {
  return isOpen ? (
    <>
      <div className="fixed z-40 h-screen w-screen bg-gray-100/40">
        <div
          className="
        fixed
        left-[25vw]
        top-[25vh]
        z-50
        flex
        h-[50vh]
        w-[50vw]
        rounded-sm
        bg-white
        drop-shadow-lg
      "
        >
          <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <div
              className="
            flex
            h-20
            w-full
            items-center
            justify-center
            space-x-4       
            "
            >
              <button onClick={onOk}>Ok</button>
              <button onClick={onCancel}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null
}
