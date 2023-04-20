import { motion, usePresence, useAnimate} from 'framer-motion'
import React, { useEffect } from 'react'

function ProjectPreview() {

    const [isPresent, safeToRemove] = usePresence()
    const [scope, animate] = useAnimate()

    useEffect(() => {
      isPresent ? isPresentAnimation() : isNotPresentAnimation()
    },[isPresent])

    const isPresentAnimation = async () => {
        await animate(scope.current,{
            width: "100%",
            transition: { duration: 0.5, ease: [0.06, 0.975, 0.195, 0.985] },
        })
        await animate(scope.current,{
            height: 500,
            transition: { duration: 0.5, ease: [0.06, 0.975, 0.195, 0.985] },
        })
    }

    const isNotPresentAnimation = async () => {
        await animate(scope.current,{
            height: 0,
            transition: { duration: 0.5, ease: [0.06, 0.975, 0.195, 0.985] },
        })
        await animate(scope.current,{
            width: 0,
            transition: { duration: 0.5, ease: [0.06, 0.975, 0.195, 0.985] },
        })
    }

  return (
    <motion.div ref={scope}  className=" h-[70vh] mt-2 shadow-md">
    <iframe
      className=" outline outline-1 outline-purple-200 rounded-md"
      src="https://paluba.vercel.app/"
      width="100%"
      height="100%"
      ></iframe>
  </motion.div>
  )
}

export default ProjectPreview