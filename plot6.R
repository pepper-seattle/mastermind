##Read in data
pm25_sum <- readRDS("summarySCC_PM25.rds")
pm25_srccls <- readRDS("Source_Classification_Code.rds")

##Motor Vehicles subset
MV_sub <- subset(pm25_sum, (fips == "24510" | fips == "06037") & type == "ON-ROAD")

##Name fips locations to Baltimore and LA
MV_sub <- transform(MV_sub, locale = ifelse(fips == "24510", "Baltimore", 
                                            "Los Angeles"))

##subset by year and locale with a sum of emissions
MVemissions_city <- ddply(MV_sub, .(year, locale), function(x) sum(x$Emissions))

##rename third column emissions
colnames(MVemissions_city)[3] <- "Emissions"

##plot emissions by locale, year
qplot(year, Emissions, data = MVemissions_city, color = locale, geom = "line") + labs(title = "PM2.5 Emissions by Locale, Year", x = "Year", y = "PM2.5 Emissions")