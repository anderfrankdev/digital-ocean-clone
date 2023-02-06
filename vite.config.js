import {defineConfig} from 'vite'
import {resolve,join} from 'path'
export default defineConfig((command)=>{

	if (command.mode==='production') {
		return {
			build:{
				rollupOptions:{
					
					input: {
						main:resolve(__dirname,'index.html')					}
				}
			}
		}
	}

	return {
        root: join(__dirname, "src"),
	}
})

"".incl