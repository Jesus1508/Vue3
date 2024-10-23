import FabButton from '@/modules/common/components/FabButton.vue'
import { shallowMount } from '@vue/test-utils'
import exp from 'constants'

describe('<FabButton />', () => {

    test('renders with default position', () => {

        const wrapper = shallowMount( FabButton )

        // console.log(wrapper.html())
        // console.log(wrapper.props())
        
        expect( wrapper.props().position).toBe('bottom-right');
        const buttonClasses = wrapper.find('button').classes()
        // console.log(buttonClasses);

        const classesToHave = [ 'btn', 'btn-circle', 'btn-secondary', 'fixed', 'bottom-right' ]
        
        expect( buttonClasses ).toEqual(classesToHave)

    })

    test('renders with top-left position', () => {
        const wrapper = shallowMount( FabButton, {
            props:{
                position: 'top-left'
            }
        })

        const button = wrapper.find('button')

        expect(button.classes()).toContain('top-left')
    })
    

    test('renders with top-right position', () => {
        const wrapper = shallowMount( FabButton, {
            props:{
                position: 'top-right'
            }
        })

        const button = wrapper.find('button')

        expect(button.classes()).toContain('top-right')
    })

    test('renders slot content inside button', () => {

        const wrapper = shallowMount(FabButton, {
            slots:{
                default: '<span>Hola</span>'
            }
        })

        // console.log(wrapper.html());

        const slotContent = wrapper.find('button span')

        expect(slotContent.exists()).toBe(true)
        expect(slotContent.text()).toBe('Hola')

    })
})