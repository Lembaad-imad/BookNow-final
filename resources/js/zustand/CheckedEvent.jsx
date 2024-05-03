import create from 'zustand';

const useCheckedEvent = create((set) => ({
  notifcart: localStorage.getItem('notifcart') === 'true',
  countcart: parseInt(localStorage.getItem('countcart')) || 0,
  clickedEvents: JSON.parse(localStorage.getItem('clickedEvents')) || [],

  addToCart: (evenement) => {
    set((state) => ({
      clickedEvents: [...state.clickedEvents, evenement],
      notifcart: true,
      countcart: state.countcart + 1,
    }));
    localStorage.setItem('clickedEvents', JSON.stringify([...getState().clickedEvents, evenement]));
  },

  removeFromCart: (id) => {
    set((state) => ({
      clickedEvents: state.clickedEvents.filter((event) => event.id !== id),
      countcart: state.countcart >0? state.countcart -1 :state.countcart,
      notifcart: state.clickedEvents.length > 1,
    }));
    localStorage.setItem('clickedEvents', JSON.stringify(getState().clickedEvents.filter((event) => event.id !== id)));
  },
}));

export default useCheckedEvent;