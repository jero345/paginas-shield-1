import { motion, useReducedMotion } from 'motion/react'

export const EASE = [0.16, 1, 0.3, 1]

/* Fade-up on first entry into the viewport. Static under reduced motion. */
export function Reveal({ as = 'div', delay = 0, className, children, ...rest }) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.9, ease: EASE, delay: delay * 0.09 }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/*
  Height-animated disclosure body. Content stays in the DOM (inert while closed) so the
  copy remains indexable and nothing is lost when collapsed.
*/
export function Collapse({ open, id, className = '', children }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      id={id}
      initial={false}
      animate={open ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
      transition={
        reduce
          ? { duration: 0 }
          : { height: { duration: 0.5, ease: EASE }, opacity: { duration: 0.35, ease: EASE } }
      }
      className={`overflow-hidden ${className}`}
      inert={!open}
      aria-hidden={!open}
    >
      {children}
    </motion.div>
  )
}
