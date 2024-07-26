import React from 'react'

const ModalDefault = ({children, onClose}) => {

    const handleBackgroundClick = (e) => {
        // 모달 배경 클릭 시 모달 닫기
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
  return (
    <>
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleBackgroundClick} >
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
            {children}
            <button 
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={handleBackgroundClick}
                >x
            </button>
        </div>
    </div>
    </>
  )
}

export default ModalDefault