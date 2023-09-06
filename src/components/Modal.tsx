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
  content: React.ReactNode
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
        flex-col
        rounded-sm
        bg-white
        drop-shadow-lg
      "
        >
          <h2 className="w-full p-10 text-center text-3xl font-semibold">
            {title}
          </h2>
          {content}
          <div
            className="
              absolute
                bottom-0
            flex
            h-20
            w-full
            items-center
            justify-end
            space-x-4  
            pr-10     
            "
          >
            <button
              className="
              rounded
                bg-blue-500
                px-4
                text-xl
                font-bold
                text-white
                hover:bg-blue-700
              "
              onClick={onOk}
            >
              Finish
            </button>
            <button
              className="
              rounded
                bg-red-500
                px-4
                text-xl
                font-bold
                text-white
                hover:bg-red-700
              "
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  ) : null
}
